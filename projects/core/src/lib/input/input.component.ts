import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'input[acc-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
