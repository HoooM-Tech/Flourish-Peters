import { Component } from '@angular/core';
import { Sermons } from 'src/app/interface/sermons';
import { SermonService } from 'src/app/services/sermon.service';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent {
  teachings: Sermons[] = [];
    currentPage: number = 1;
    pageSize: number = 5;
    totalBlogs: number = 0;

    constructor(private sermonService: SermonService){}

    ngOnInit(){
      this.totalBlogs = this.sermonService.getTotalBlogs();
          this.loadBlogs();
    }
  
    loadBlogs(): void {
      this.teachings = this.sermonService.getBlogs(this.currentPage, this.pageSize);
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

}
