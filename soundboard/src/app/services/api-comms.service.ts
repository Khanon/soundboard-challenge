import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { SoundData } from '../../../../server/src/models/sound-data';
import { Config } from '../../env-config';
import { SoundPlayback } from '../models/sound-playback';

@Injectable({
  providedIn: 'root',
})
export class ApiCommsService {
  onNewSoundsPrice$: BehaviorSubject<SoundPlayback>;

  constructor(private http: HttpClient) {}

  getSounds(): Observable<SoundData[]> {
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

  playbackSound(soundId: number): void {
    this.http
      .put('https://jsonplaceholder.typicode.com/posts/1', {})
      .subscribe((data) => {
        // console.log('aki data', data);
        // this.onNewSoundsPrice$.next({data.id, data.price}
      });

    /*this.http.put<any>(`${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}/play`,
        {})
    .subscribe(soundPlayback => this.onNewSoundsPrice$.next({soundPlayback.id, soundPlayback.price}));*/

    /*this.http
      .put(
        `${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}/play`,
        {}
      )
      .subscribe((response) => {
        if (response.ok) {
          response.json();
          this.onNewSoundsPrice$.next(soundPlayback.id, soundPlayback.price);
        }
      });*/
  }

  getSoundDetails(soundId: number): Observable<SoundData> {
    console.log(
      'aki getSoundDetails:',
      `${Config.serverUrl}:${Config.serverPort}/sounds/${soundId}`
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
