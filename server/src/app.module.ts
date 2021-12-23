import { Module } from '@nestjs/common';

import { ApiController } from './api-rest/api.controller';
import { ApiService } from './api-rest/api.service';
import { DataBaseService } from './database/database.service';
import { WSModule } from './websocket/websocket.module';
import { WSGateway } from './websocket/websocket.gateway';

@Module({
  imports: [WSModule],
  controllers: [ApiController],
  providers: [ApiService, DataBaseService, WSGateway],
})
export class AppModule {}
