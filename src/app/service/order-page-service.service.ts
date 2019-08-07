import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderPageService {

  parkingPlaceList = [
    {
      order: 1,
      occupied: false,
    },
    {
      order: 2,
      occupied: false,
    },
    {
      order: 3,
      occupied: false,
    },
    {
      order: 4,
      occupied: true,
    },
    {
      order: 5,
      occupied: false,
    },
    {
      order: 6,
      occupied: false,
    },

  ];

  constructor() { }

  getParkingPlace() {
    return this.parkingPlaceList;
  }
}
