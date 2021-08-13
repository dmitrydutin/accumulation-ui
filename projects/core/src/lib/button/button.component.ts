import { Component, ChangeDetectionStrategy, OnInit, Input, HostBinding } from '@angular/core';
import { Color } from './button.interface';
import { Icon } from '../icon/icon.interface';

@Component({
  selector: 'button[acc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() color: Color = 'light';
  @Input() icon!: Icon;

  @HostBinding('class') get getClass() {
    return this.color;
  }

  constructor() {}

  ngOnInit(): void {}
}
