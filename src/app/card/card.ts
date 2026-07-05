import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() id = '';
  @Input() name = '';
  @Input() department = '';
  @Input() age = '';
  @Input() isMar = false;
  @Input() workNow = false;
}
