import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { WSData } from './websocket.data';

@WebSocketGateway()
export class WSGateway implements OnGatewayConnection, OnGatewayDisconnect {
  wsData: WSData;
  constructor() {
    this.wsData = new WSData();
  }

  @WebSocketServer() server;

  async handleConnection(client) {
    // Handle new connection
  }

  async handleDisconnect() {
    // Handle disconnection
  }
}
