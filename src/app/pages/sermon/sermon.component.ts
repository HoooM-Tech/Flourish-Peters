import { Component } from '@angular/core';
import { Sermons } from 'src/app/interface/sermons';
import { SermonService } from 'src/app/services/sermon.service';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent {
  selectedSermon?: Sermons;


  teachings: Sermons[] = [];
    currentPage: number = 1;
    pageSize: number = 9;
    totalBlogs: number = 0;

    constructor(private sermonService: SermonService){}

    ngOnInit(){
      this.totalBlogs = this.sermonService.getTotalSermons();
          this.loadBlogs();
    }
  
    loadBlogs(): void {
      this.teachings = this.sermonService.getSermons(this.currentPage, this.pageSize);
  }

  // Pagination logic
nextPage(): void {
  if (this.currentPage * this.pageSize < this.totalBlogs) {
      this.currentPage++;
      this.loadBlogs();
  }
}

prevPage(): void {
if (this.currentPage > 1) {
    this.currentPage--;
    this.loadBlogs();
}
}

// For Every selected sermons
selectSermon(sermon: Sermons): void {
  this.selectedSermon = sermon;
  // scroll to the top of the page to display the selected sermon
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
