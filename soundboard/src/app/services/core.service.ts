import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Config } from '../../env-config';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(
    private http: HttpClient,
    private readonly socket: SocketService
  ) {
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
    this.socket.initSocket(Config.serverUrl, Config.serverPort);
  }

  isSocketConnected(): boolean {
    if (this.socket && this.socket.isConnected()) {
      return true;
    } else {
      return false;
    }
  }
}
