import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-mmt',
  templateUrl: './mmt.component.html',
  styleUrls: ['./mmt.component.css']
})
export class MmtComponent {

  ngOnInit() {
    AOS.init();
  }
}
