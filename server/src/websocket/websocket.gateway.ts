import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { SocketEvents } from '../models/socket-events';
import { Logger } from '../models/logger';

@WebSocketGateway()
export class WSGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private clients: any[] = [];

  constructor() {}

  @WebSocketServer() server;

  // Handle new connection
  async handleConnection(client) {
    const clientExists = this.clients?.find((_client) => _client === client);
    if (!clientExists) {
      Logger.info('Websocket connected to client:', client);
      client.emit(SocketEvents.ON_CONNECTED);
      this.clients.push(client);
    }
  }

  // Handle disconnection
  async handleDisconnect() {
    // Not neccesary for this challenge
    Logger.info('Websocket disconnected!');
  }

  emitNewSoundData() {
    Logger.info('Websocket emit new sound data.');
    this.clients?.forEach((client) => client.emit(SocketEvents.NEW_SOUNDS));
  }
}
