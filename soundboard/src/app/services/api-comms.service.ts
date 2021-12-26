import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

import { SoundData } from '../models/sound-data';
import { Config } from '../../env-config';
import { SoundPlayback } from '../models/sound-playback';
import { Logger } from '../models/logger';

@Injectable({
  providedIn: 'root',
})
export class ApiCommsService {
  onNewSoundsPrice$: BehaviorSubject<SoundPlayback>;

  constructor() {}

  getSounds(): Observable<SoundData[]> {
    Logger.info(
      `Fetch GET Request: ${Config.serverUrl}:${Config.serverPort}/sounds`
    );
    return fromFetch(`${Config.serverUrl}:${Config.serverPort}/sounds`).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        console.error(err);
        throw of({ error: true, message: err.message });
      })
    );
  }

  playbackSound(soundId: number): Observable<SoundPlayback | undefined> {
    Logger.info(
      `Fetch PUT Request: ${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}/play`
    );
    return fromFetch(
      `${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}/play`,
      { method: 'PUT' }
    ).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        console.error(err);
        throw of({ error: true, message: err.message });
      })
    );
  }

  getSoundDetails(soundId: number): Observable<SoundData> {
    Logger.info(
      `Fetch GET Request: ${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}`
    );
    return fromFetch(
      `${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}`
    ).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        console.error(err);
        throw of({ error: true, message: err.message });
      })
    );
  }
}
