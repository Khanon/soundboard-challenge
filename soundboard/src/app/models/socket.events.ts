import { Socket } from 'ngx-socket-io';

export enum SocketEvents {
  ON_CONNECTED = 'ON_CONNECTED',
  NEW_SOUNDS = 'NEW_SOUNDS',
}

export abstract class SocketBase extends Socket {
  protected pConnected: boolean;
  abstract isConnected(): boolean;
}
