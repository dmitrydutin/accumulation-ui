import { Component, OnInit, Input } from '@angular/core';
import { Icon } from './icon.interface';

@Component({
  selector: 'acc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon!: Icon;

  constructor() {}

  ngOnInit(): void {}
}
