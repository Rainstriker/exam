import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestChildComponent } from './test-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TestChildComponent],
  exports: [TestChildComponent]
})
export class TestChildModule { }
