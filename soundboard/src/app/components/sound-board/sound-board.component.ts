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
  sounds: SoundData[] = [
    {
      id: 0,
      name: 'Camera',
      icon: 'https://www.khanon3d.com/cors-allowed/icon1.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 1,
      name: 'Clothes',
      icon: 'https://www.khanon3d.com/cors-allowed/icon2.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 2,
      name: 'Glasses',
      icon: 'https://www.khanon3d.com/cors-allowed/icon3.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 3,
      name: 'Ice cream',
      icon: 'https://www.khanon3d.com/cors-allowed/icon4.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 4,
      name: 'Coffee',
      icon: 'https://www.khanon3d.com/cors-allowed/icon5.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 5,
      name: 'Cactus',
      icon: 'https://www.khanon3d.com/cors-allowed/icon6.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 6,
      name: 'Headphones',
      icon: 'https://www.khanon3d.com/cors-allowed/icon7.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 7,
      name: 'Book',
      icon: 'https://www.khanon3d.com/cors-allowed/icon8.jpg',
      price: 1.99,
      playbacks: 0,
    },
    {
      id: 8,
      name: 'Cat',
      icon: 'https://www.khanon3d.com/cors-allowed/icon9.jpg',
      price: 2,
      playbacks: 0,
    },
    {
      id: 9,
      name: 'Megaphone',
      icon: 'https://www.khanon3d.com/cors-allowed/icon10.jpg',
      price: 2,
      playbacks: 0,
    },
    {
      id: 10,
      name: 'Controller',
      icon: 'https://www.khanon3d.com/cors-allowed/icon11.jpg',
      price: 1,
      playbacks: 0,
    },
    {
      id: 11,
      name: 'Shoes',
      icon: 'https://www.khanon3d.com/cors-allowed/icon12.jpg',
      price: 1,
      playbacks: 0,
    },
  ];
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
    this.boardState = BoardState.CONTENT; // TODO
    // this.loadContent();
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
