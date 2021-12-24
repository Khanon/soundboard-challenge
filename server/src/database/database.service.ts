import { Injectable } from '@nestjs/common';

import { SoundData } from '../models/sound-data';
import { SoundPlayback } from '../models/sound-playback';

@Injectable()
export class DataBaseService {
  // Default data
  private soundsData: SoundData[] = [
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

  getSounds(): SoundData[] {
    return this.soundsData;
  }

  getSoundDetails(soundId: number): SoundData {
    return this.soundsData.find((sound) => sound.id === soundId);
  }

  setSoundsData(soundData: SoundData[]): void {
    this.soundsData = [];
    soundData.forEach((data) => {
      const newData: SoundData = {
        id: Number(data.id),
        name: data.name,
        icon: data.icon,
        price: 1.99,
        playbacks: 0,
      };
      this.soundsData.push(newData);
    });
  }

  incSoundPlayback(soundId: number): SoundPlayback | undefined {
    const sound = this.getSoundDetails(soundId);
    if (sound) {
      sound.playbacks++;
      sound.price += 0.01;
      return {
        id: sound.id,
        price: sound.price,
      };
    } else {
      return undefined;
    }
  }
}
