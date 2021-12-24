import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';

import { SoundData } from '../../models/sound-data';
import { SoundControllerService } from '../../services/sound-controller.service';
import { BoardState } from '../../models/board-state';
import { CoreService } from '../../services/core.service';
import { SocketService } from '../../services/socket.service';
import { ApiCommsService } from '../../services/api-comms.service';
import { Logger } from '../../models/logger';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  sounds: SoundData[] = [];
  soundSelected: SoundData;
  boardState: BoardState;
  BoardState = BoardState;

  selectorColor: ThemePalette = 'primary';
  selectorShortcuts = false;
  selectorMute = false;

  onNewSoundsData$: Subscription;

  constructor(
    private readonly soundController: SoundControllerService,
    private readonly coreService: CoreService,
    private readonly apiCommsService: ApiCommsService,
    private readonly socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.boardState = BoardState.CONTENT;
    this.loadContent();
    this.hookSocketSubscriptions();
  }

  hookSocketSubscriptions() {
    if (this.socketService && this.socketService.isConnected()) {
      this.onNewSoundsData$ = this.socketService
        .onNewSoundsData()
        .subscribe((newData: boolean) => {
          Logger.info('New content on server.');
          this.askReload();
        });
    } else {
      setTimeout(this.hookSocketSubscriptions.bind(this), 1000);
    }
  }

  onSelectSound(soundData: SoundData) {
    this.soundSelected = soundData;
    this.soundController.selectSound(this.soundSelected);
  }

  loadContent() {
    this.boardState = BoardState.LOADING;
    this.apiCommsService.getSounds().subscribe({
      next: (soundsData: SoundData[]) => {
        Logger.info('Content loaded.');
        this.sounds = [...soundsData];
        this.boardState = BoardState.CONTENT;
      },
      error: () => {
        Logger.warn('Load content connection rejected! Check server status.');
        setTimeout(() => this.loadContent(), 1000);
      },
    });
  }

  askReload() {
    this.boardState = BoardState.ASK_RELOAD;
  }

  onAskBack() {
    this.boardState = BoardState.CONTENT;
  }

  onAskReload() {
    this.loadContent();
  }

  onPlayback(soundId: number): void {
    this.apiCommsService.playbackSound(soundId).subscribe((soundPlayback) => {
      if (soundPlayback) {
        const sound = this.sounds.find(
          (sound) => sound.id === soundPlayback.id
        );
        if (sound) {
          sound.price = soundPlayback.price;
        }
      }
    });
  }
}
