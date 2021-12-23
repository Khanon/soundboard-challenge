import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SoundDetailsComponent } from './components/sound-details/sound-details.component';
import { SoundBoardComponent } from './components/sound-board/sound-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    SoundDetailsComponent,
    SoundBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
