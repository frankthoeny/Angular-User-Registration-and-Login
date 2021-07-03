import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeSlideIndex = 0;
  myInterval = 0;
  slides = [
    {image: '/assets/images/nature/1.jpg'},
    {image: '/assets/images/nature/2.jpg'},
    {image: '/assets/images/nature/3.jpg'},
    {image: '/assets/images/nature/4.jpg'},
    {image: '/assets/images/nature/5.jpg'},
    {image: '/assets/images/nature/6.jpg'},
    {image: '/assets/images/nature/7.jpg'},
    {image: '/assets/images/nature/8.jpg'}
  ];

  onClickMakeActive(index) {
    this.activeSlideIndex = index;
    this.myInterval = 0;
  }
  
}
