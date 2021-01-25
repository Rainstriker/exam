import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { TestChildModule } from 'src/app/components/test-child/test-child.module';
import { OrderComponentModule } from 'src/app/components/order-component/order-component.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TestChildModule,
    OrderComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
