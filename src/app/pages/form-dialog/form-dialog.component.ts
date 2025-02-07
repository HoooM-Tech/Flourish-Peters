import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MmtformService } from 'src/app/services/mmtform.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {

  activeStep = 1;
  userForm!: FormGroup;
  uploadForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(public mmtFormService: MmtformService){}


  // Proceed to Step 2
  nextStep() {
    if (this.userForm.valid) {
      this.activeStep = 2;
    }
  }

  // Submit Data
  submitForm() {
    if (this.uploadForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('fullName', this.userForm.value.fullName);
      formData.append('email', this.userForm.value.email);
      formData.append('phoneNumber', this.userForm.value.phoneNumber);
      formData.append('member', this.userForm.value.occupation);
      formData.append('class', this.userForm.value.age);
      formData.append('experience', this.uploadForm.value.comment);
      formData.append('previousclass', this.uploadForm.value.comment);
      formData.append('notetomentor', this.uploadForm.value.comment);
      formData.append('receipt', this.selectedFile);

      console.log('Form submitted:', formData);
      alert('Form successfully submitted!');

    }
  }
  closeForm(){
    this.mmtFormService.closeDialog();
  };
}
