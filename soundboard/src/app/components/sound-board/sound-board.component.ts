import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { SoundData } from '../../models/sound-data';
import { SoundControllerService } from '../../services/sound-controller.service';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  sounds: SoundData[] = [
    {
      id: 0,
      name: 'test0',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 1,
      name: 'test1',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 2,
      name: 'test2',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 3,
      name: 'test3',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 4,
      name: 'test4',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 5,
      name: 'test5',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 6,
      name: 'test6',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 7,
      name: 'test7',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 8,
      name: 'test8',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 9,
      name: 'test9',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 10,
      name: 'test10',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 11,
      name: 'test11',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 12,
      name: 'test12',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
    {
      id: 13,
      name: 'test13',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      price: 10.01,
    },
  ];
  soundSelected: SoundData;

  selectorColor: ThemePalette = 'primary';

  selectorShortcuts = false;
  selectorMute = false;

  constructor(private soundController: SoundControllerService) {}

  ngOnInit(): void {}

  onSelectSound(soundData: SoundData) {
    this.soundSelected = soundData;
    this.soundController.selectSound(this.soundSelected);
  }
}
