import { Injectable } from '@angular/core';
import { Sermons } from '../interface/sermons';

@Injectable({
  providedIn: 'root'
})
export class SermonService {

  private sermon:Sermons[] = [
    {
        id: 1,
        description: 'Spirit of Prayer',
        PreacherName: 'Apostle Flourish Peters',
        SermonPreview: 'assets/sermon/img1.png',
        videoUrl: ''
    },
    {
      id: 2,
      description: 'Spirit of Prayer',
      PreacherName: 'Apostle Flourish Peters',
      SermonPreview: 'assets/sermon/img2.png',
      videoUrl: ''
  },
  {
    id: 3,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img3.png',
    videoUrl: ''
  },
  {
    id: 4,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img4.png',
    videoUrl: ''
  },
  {
    id: 5,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img5.png',
    videoUrl: ''
  },
  {
    id: 6,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img6.png',
    videoUrl: ''
  },
  {
    id: 7,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img7.png',
    videoUrl: ''
  },
  {
    id: 8,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img8.png',
    videoUrl: ''
  },
  {
    id: 9,
    description: 'Spirit of Prayer',
    PreacherName: 'Apostle Flourish Peters',
    SermonPreview: 'assets/sermon/img9.png',
    videoUrl: ''
  }
]

getSermons(page: number, limit: number): Sermons[] {
  const start = (page - 1) * limit;
  return this.sermon.slice(start, start + limit);
}

getSermonById(id: number): Sermons | undefined {
  return this.sermon.find(blog => blog.id === id);
}

getTotalSermons(): number {
  return this.sermon.length;
}

  constructor() { }
}
