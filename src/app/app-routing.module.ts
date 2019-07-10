import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const appRoutes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'orderPage', component: OrderPageComponent },
  { path: 'orderDetail', component: OrderDetailComponent},
  { path: '',   redirectTo: '/homePage', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
