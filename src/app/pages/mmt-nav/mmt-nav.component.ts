import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mmt-nav',
  templateUrl: './mmt-nav.component.html',
  styleUrls: ['./mmt-nav.component.css']
})
export class MmtNavComponent {

  ScrollToSection(sectionId: string){
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
