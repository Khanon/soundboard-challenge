import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { ApiService } from './api.service';
import { SoundData } from '../models/sound-data';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/sounds')
  postSounds(@Body() data: SoundData[]): void {
    this.apiService.postSounds(data);
  }

  @Get('/sounds')
  getSounds(): SoundData[] {
    return this.apiService.getSounds();
  }

  @Get('/sounds/:soundId')
  getSoundDetails(@Param('soundId') soundId: string): SoundData {
    return this.apiService.getSoundDetails(Number(soundId));
  }

  @Put('/sounds/:soundId/play')
  playSound(@Param('soundId') soundId: string): void {
    this.apiService.playSound(Number(soundId));
  }
}
