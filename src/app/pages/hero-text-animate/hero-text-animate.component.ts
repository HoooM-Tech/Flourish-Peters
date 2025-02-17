import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-text-animate',
  templateUrl: './hero-text-animate.component.html',
  styleUrls: ['./hero-text-animate.component.css']
})
export class HeroTextAnimateComponent implements OnInit, OnDestroy {
  items = [
    {content: 'He died for me, He died as me:',
      text: ' When he was buried, I was buried.'
    },
    {content: '',
      text: '!'
    },
    {content: '',
      text: ''
    },
  ];

  activeItem = this.items[0];
  intervalId: any;

  ngOnInit() {
    this.startAutoUpdate();
  }

  ngOnDestroy() {
    this.stopAutoUpdate();
  }

  selectItem(item: any) {
    this.activeItem = item;
  }

  startAutoUpdate() {
    this.intervalId = setInterval(() => {
      this.updateContent();
    }, 10000);
  }

  stopAutoUpdate() {
    clearInterval(this.intervalId);
  }

  updateContent() {
    const currentIndex = this.items.indexOf(this.activeItem);
    const nextIndex = (currentIndex + 1) % this.items.length;
    this.activeItem = this.items[nextIndex];
  }


}
