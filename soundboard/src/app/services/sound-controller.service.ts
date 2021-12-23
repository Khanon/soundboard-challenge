import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SoundData } from '../models/sound-data';

@Injectable({
  providedIn: 'root',
})
export class SoundControllerService {
  soundSelected: SoundData;
  soundSelected$: BehaviorSubject<SoundData>;

  constructor() {
    this.soundSelected$ = new BehaviorSubject<SoundData>(this.soundSelected);
  }

  selectSound(sound: SoundData) {
    if (this.soundSelected !== sound) {
      this.soundSelected = sound;
      this.soundSelected$.next(this.soundSelected);
    }
  }
}
