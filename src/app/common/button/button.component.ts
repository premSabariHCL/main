import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('size')
  size = 'S'; // S,M,L
  @Input('shade')
  shade = 'NA'; // D,L,W,NA
  @Input('animation')
  animation = 'F'; // C,F,NA
  @Input('name')
  name = '';
  constructor() { }

  ngOnInit(): void {
  }

}
