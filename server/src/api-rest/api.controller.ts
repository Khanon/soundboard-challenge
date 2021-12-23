import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Post('/sounds')
  postSounds(): string {
    return this.appService.postSounds();
  }

  @Get('/sounds')
  getSounds(): string {
    return this.appService.getSounds();
  }

  @Get('/sounds/:soundId')
  getSoundDetails(@Param('soundId') soundId: number): string {
    return this.appService.getSoundDetails(soundId);
  }

  @Put('/sounds/:soundId/play')
  playSound(@Param('soundId') soundId: number): string {
    return this.appService.playSound(soundId);
  }
}
