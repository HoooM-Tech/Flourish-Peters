import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    AOS.init();
  }

  texts: string[] = [
    '<strong>He died for me, He died as me:</strong> When he was buried, I was buried.',
    '<strong>He rose for me, He rose with me:</strong> Now I live in victory.',
    '<strong>He ascended for me, He ascended with me:</strong> Seated in heavenly places.',
    '<strong>Now I am Seated with Christ:</strong> In Heavenly Place Glory.'
  ];
  currentText: string = this.texts[0];
  textIndex: number = 0;

  constructor() {
    this.changeText();
  }

  changeText() {
    setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.textIndex];

      // Reinitialize AOS on text change
      setTimeout(() => AOS.refresh(), 100);
    }, 8000); // Change every 8 seconds
  }
}
