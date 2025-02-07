import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MmtformService {
  UserDialog = false;

  constructor() { }


  openDialog() {
    this.UserDialog = true;
  }

  closeDialog() {
    this.UserDialog = false;
  }
}
