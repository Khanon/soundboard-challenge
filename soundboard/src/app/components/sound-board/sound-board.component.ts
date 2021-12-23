import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { SoundData } from '../../models/sound-data';
import { SoundControllerService } from '../../services/sound-controller.service';
import { BoardState } from '../../models/board-state';
import { CoreService } from '../../services/core.service';

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

  constructor(
    private readonly soundController: SoundControllerService,
    private readonly coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  onSelectSound(soundData: SoundData) {
    this.soundSelected = soundData;
    this.soundController.selectSound(this.soundSelected);
  }

  loadContent() {
    this.boardState = BoardState.LOADING;
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
}
