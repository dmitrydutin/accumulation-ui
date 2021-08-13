import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string = 'default';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    this.click.emit(event);
  }
}
