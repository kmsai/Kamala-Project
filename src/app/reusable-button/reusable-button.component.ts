import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.css'],
})
export class ReusableButtonComponent implements OnInit {
  @Input() type: any;
  @Input() label: any;
  @Input() cssClass: any;
  constructor() {}

  ngOnInit(): void {}
}
