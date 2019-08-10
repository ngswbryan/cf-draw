import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  selectedColorObj = new Subject<any>();
  myMessage = new Subject<CanvasRenderingContext2D>();

  getMessage(): Observable<CanvasRenderingContext2D> {
    return this.myMessage.asObservable();
  }

  updateMessage(message: CanvasRenderingContext2D) {
    this.myMessage.next(message);
  }

}
