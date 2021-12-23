import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  postSounds(): string {
    return 'postSounds';
  }

  getSounds(): string {
    return 'getSounds';
  }

  getSoundDetails(soundId: number): string {
    return 'getSoundDetails -> ' + soundId;
  }

  playSound(soundId: number): string {
    return 'playSound -> ' + soundId;
  }
}
