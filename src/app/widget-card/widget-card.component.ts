import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent {
@Input() Icon:string=''
@Input() desc:string=''
@Input() bg:string=''
}
