import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { ApiService } from './api.service';
import { SoundData } from '../models/sound-data';
import { SoundPlayback } from '../models/sound-playback';
import { Logger } from '../models/logger';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/sounds')
  postSounds(@Body() data: SoundData[]): void {
    Logger.info(`POST Request: '/sounds'`);
    this.apiService.postSounds(data);
  }

  @Get('/sounds')
  getSounds(): SoundData[] {
    Logger.info(`GET Request: '/sounds'`);
    return this.apiService.getSounds();
  }

  @Get('/sounds/:soundId')
  getSoundDetails(@Param('soundId') soundId: string): SoundData {
    Logger.info(`GET Request: '/sounds/${soundId}'`);
    return this.apiService.getSoundDetails(Number(soundId));
  }

  @Put('/sounds/:soundId/play')
  playSound(@Param('soundId') soundId: string): SoundPlayback | undefined {
    Logger.info(`PUT Request: '/sounds/${soundId}/play'`);
    return this.apiService.playSound(Number(soundId));
  }
}
