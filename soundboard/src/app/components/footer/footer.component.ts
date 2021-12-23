import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  selectorColor: ThemePalette = 'primary';

  selectorListenMyself = true;
  selectorVoiceChanger = false;
  selectorBackgroundFx = true;

  constructor() {}

  ngOnInit(): void {}
}
