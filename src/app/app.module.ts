import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ColorButtonComponent } from './components/color-button/color-button.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { PlayGameComponent } from './components/play-game/play-game.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ColorButtonComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
