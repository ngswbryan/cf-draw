import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { CanvasComponent } from 'src/app/components/canvas/canvas.component'
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-play-game',
  providers: [CanvasComponent],
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})

export class PlayGameComponent implements AfterViewInit {

  @ViewChild('drawing', { static: false }) drawing: ElementRef;
  @ViewChild('cd1', { static: false }) cd1: CountdownComponent;

  roll: number;
  timerFinished: boolean = false;
  cx: CanvasRenderingContext2D;

  drawingItems: string[] = [
    'pikachu',
    'meowth',
    'charizard',
    'mew',
    'blastoise',
    'zapdos',
    'articuno',
    'vulpix',
    'onyx',
    'ratata',
    'caterpie',
    'bulbasaur'
  ]

  constructor(private messageService: MessageService) {
    this.messageService.getMessage().subscribe(mymessage => this.cx = mymessage);
  }

  ngAfterViewInit() {
    this.cd1.pause();
  }

  randomGame() {
    this.cx.clearRect(0, 0, 1180, 380);
    this.timerFinished = false;
    this.roll = Math.floor(Math.random() * 12);
    this.drawing.nativeElement.innerHTML = this.drawingItems[this.roll];
    this.cd1.restart();
    this.cd1.resume();
  }

  onFinished() {
    this.timerFinished = true;
  }

  getBoolean() {
    return this.timerFinished;
  }

}
