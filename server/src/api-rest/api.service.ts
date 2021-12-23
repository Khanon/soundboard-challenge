import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { DataBaseService } from '../database/database.service';
import { SoundData } from '../models/sound-data';
import { WSGateway } from '../websocket/websocket.gateway';

@Injectable()
export class ApiService {
  constructor(
    private readonly database: DataBaseService,
    private readonly wSGateway: WSGateway,
  ) {}

  postSounds(data: SoundData[]): void {
    // There are better ways to do this, using Nets validator, but I didn't find the way to do it with a raw array
    if (!this.validatePostSoundsBody(data)) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    } else {
      this.database.setSoundsData(data);
      this.wSGateway.emitNewSoundData();
    }
  }

  getSounds(): SoundData[] {
    return this.database.getSounds();
  }

  getSoundDetails(soundId: number): SoundData {
    return this.database.getSoundDetails(soundId);
  }

  playSound(soundId: number): void {
    this.database.incSoundPlayback(soundId);
  }

  private validatePostSoundsBody(data: any[]): Boolean {
    if (!Array.isArray(data)) {
      return false;
    }
    let valid = true;
    data.forEach((item) => {
      if (
        item.id === undefined ||
        isNaN(Number(item.id)) ||
        item.name === undefined ||
        typeof item.name !== 'string' ||
        item.icon === undefined ||
        typeof item.icon !== 'string'
      ) {
        valid = false;
        return;
      }
    });
    return valid;
  }
}
