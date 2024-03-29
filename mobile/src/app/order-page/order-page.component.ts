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
  public needCharging: false;
  ngOnInit() {
    this.parkingList = this.orderPageService.getParkingPlace();
  }

  public chooseParking(parking) {
    console.log(111);
    this.router.navigate(['/orderDetail']);
  }

  public chooseIndex(index) {
    console.log(index)
    this.parkingList.forEach(p => p.choosen = false);
    this.parkingList[index].choosen = true;
  }

  public ensure() {
    this.router.navigate(['/video']);
  }

}
