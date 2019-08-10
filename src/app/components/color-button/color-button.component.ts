import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent implements OnInit {

  selectedColor: string = 'black';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  updateSelectedColor() {
    this.messageService.selectedColorObj.next(this.selectedColor);
  }
}
