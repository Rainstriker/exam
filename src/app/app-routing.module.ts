import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponentComponent } from './components/order-component/order-component.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
  { path: 'home-component',loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),  },
  { path: 'order-component', component: OrderComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
