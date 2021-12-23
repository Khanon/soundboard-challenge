import { SocketEvents } from '../models/socket.events';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

@WebSocketGateway()
export class WSGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private clients: any[];

  constructor() {}

  @WebSocketServer() server;

  async handleConnection(client) {
    console.log('aki CONNECTED!');
    const clientExists = this.clients.find((_client) => _client === client);
    // Handle new connection
    if (!clientExists) {
      this.clients.push(clientExists);
    }
  }

  async handleDisconnect() {
    // Handle disconnection
  }

  emitNewSoundData() {
    this.clients?.forEach((client) => client.emit(SocketEvents.NEW_SOUNDS));
  }
}
