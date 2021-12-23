import { Component, OnInit } from '@angular/core';

import { SoundControllerService } from '../../services/sound-controller.service';
import { SoundData } from '../../models/sound-data';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sound-details',
  templateUrl: './sound-details.component.html',
  styleUrls: ['./sound-details.component.scss'],
})
export class SoundDetailsComponent implements OnInit {
  soundSelected: SoundData;
  volumeValue = 50;
  toneValue = 10;

  sliderColor: ThemePalette = 'primary';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;

  constructor(private soundController: SoundControllerService) {}

  ngOnInit(): void {
    this.subscribeSoundSelected();
  }

  subscribeSoundSelected() {
    this.soundController.soundSelected$.subscribe((soundSelected) => {
      this.soundSelected = soundSelected;
    });
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }
}
