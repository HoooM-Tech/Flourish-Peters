import { Component } from '@angular/core';
import AOS from 'aos';
import { MmtformService } from 'src/app/services/mmtform.service';

@Component({
  selector: 'app-mmt',
  templateUrl: './mmt.component.html',
  styleUrls: ['./mmt.component.css'],
})
export class MmtComponent {
  constructor(public mmtFormService: MmtformService) {}

  ScrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnInit() {
    AOS.init();
  }
}
