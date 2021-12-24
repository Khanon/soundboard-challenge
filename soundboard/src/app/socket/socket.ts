import { SocketBase, SocketEvents } from '../models/socket-events';
import { Logger } from '../models/logger';

export class SocketNgx extends SocketBase {
  constructor(url: string, port: string) {
    const targetUrl = `${url}:${port}`;
    super({ url: targetUrl, options: {} });
    Logger.info(`Socket: Ngx socket, Connecting to ${targetUrl}.`);

    // Events
    this.fromEvent<void>(SocketEvents.ON_CONNECTED).subscribe((msg) => {
      this.onConnected();
    });
  }

  isConnected(): boolean {
    return this.pConnected;
  }

  // Handlke on connection
  onConnected() {
    Logger.info('Socket: Connected.');
    this.pConnected = true;
  }

  // Handlke on disconnection
  onDisconnected() {
    Logger.info('Socket: Disconnected!');
    this.pConnected = false;
  }
}
