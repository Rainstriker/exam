import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponentComponent } from 'src/app/components/order-component/order-component.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component: OrderComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
