import { Component, OnInit } from '@angular/core';
import { OrderPageService } from '../service/order-page-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(
    public orderPageService: OrderPageService,
    public router: Router
  ) { }

  public parkingList = [];

  ngOnInit() {
    this.parkingList = this.orderPageService.getParkingPlace();
  }

  public chooseParking(parking) {
    console.log(111);
    this.router.navigate(['/orderDetail']);
  }
}
