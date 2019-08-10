import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { VideoComponent } from './video/video.component'

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'video', component: VideoComponent },
  { path: 'orderPage', component: OrderPageComponent },
  { path: 'orderDetail', component: OrderDetailComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
