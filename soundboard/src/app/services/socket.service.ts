import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketNgx } from '../socket/socket';
import { SocketEvents, SocketBase } from '../models/socket.events';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socket: SocketBase;

  constructor() {
    this.checkConnected();
  }

  initSocket(url: string, port: string): void {
    // Socket Ngx
    this.socket = new SocketNgx(url, port);
  }

  isConnected(): boolean {
    if (this.socket) {
      return this.socket.isConnected();
    } else {
      return false;
    }
  }

  checkConnected(): void {
    setTimeout(() => {
      if (this.isConnected()) {
        // Ask for initial data
      } else {
        this.checkConnected();
      }
    }, 3000);
  }

  /**
   * Receice accounts data
   */
  onNewSoundsData(): Observable<boolean> {
    return this.socket.fromEvent<boolean>(SocketEvents.NEW_SOUNDS);
  }
}
