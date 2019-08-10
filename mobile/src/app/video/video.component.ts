import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/orderDetail']);
    },5000)
  }


  ngAfterViewInit(): void {
    const player = new (window as any).EZUIKit.EZUIPlayer('myPlayer');
    player.play();
  }
}
