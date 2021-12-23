import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SocketNgx } from '../socket/socket';
import { SocketBase } from '../models/socket.events';
import { Config } from '../../env-config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public socket: SocketBase;

  constructor(private http: HttpClient) {
    this.init();
  }

  init(): void {
    // Init Socket
    this.initSocket();
  }

  /**
   * SocketIO is not being injected on app.module because for its connection
   * it must wait to get the environment settings ('url' and 'port').
   */
  initSocket(): void {
    console.log('aki INIT SOCKET', Config.serverUrl, Config.serverPort);
    // Socket Ngx
    this.socket = new SocketNgx(Config.serverUrl, Config.serverPort);
  }

  isSocketConnected(): boolean {
    if (this.socket && this.socket.isConnected()) {
      return true;
    } else {
      return false;
    }
  }
}
