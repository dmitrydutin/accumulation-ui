import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'acc-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
