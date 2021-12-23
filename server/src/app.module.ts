import { Module } from '@nestjs/common';
import { ApiController } from './api-rest/api.controller';
import { ApiService } from './api-rest/api.service';
import { WSGateway } from './websocket/websocket.gateway';

@Module({
  imports: [WSGateway],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
