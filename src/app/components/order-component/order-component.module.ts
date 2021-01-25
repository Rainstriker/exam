import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderComponentComponent } from './order-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [OrderComponentComponent],
  exports: [OrderComponentComponent]
})
export class OrderComponentModule { }
