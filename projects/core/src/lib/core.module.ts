import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DividerComponent,
    IconComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    DividerComponent,
    IconComponent,
    InputComponent
  ]
})
export class AccumulationUIModule { }
