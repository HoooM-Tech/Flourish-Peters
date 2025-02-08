import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MmtformService } from 'src/app/services/mmtform.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {

  activeStep = 1;
  userForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(public mmtFormService: MmtformService, private fB: FormBuilder, private router: Router){
    this.userForm = this.fB.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern('^[+0-9]{1,4}[- ]?([0-9]{10})$')]],
      is_member: [''],
      class: [''],
      experience: ['', Validators.required],
      previous_class: ['', Validators.required],
      mentor:  ['', Validators.required],
      reciept: ['null', Validators.required]
    });
  }


  // Proceed to Step 2
  nextStep() {
    if (this.userForm.valid) {
      this.activeStep = 2;
      
      // Scroll to top of second form
      const element = document.querySelector('.main-form2');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields before proceeding.',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then(() => {
        // Mark all fields as touched to show errors
        Object.keys(this.userForm.controls).forEach(key => {
          this.userForm.get(key)?.markAsTouched();
        });
      });
    }
  }
  

  //Upload file
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (!file.type.match('image/.+|application/pdf')) {
        Swal.fire({
          title: 'Invalid File Type!',
          text: 'Please upload JPG, PNG, or PDF files only.',
          icon: 'error'
        });
        return;
      }
  
      this.selectedFile = file;
      const reader = new FileReader();
      
      reader.onload = () => {
        this.userForm.patchValue({ reciept: file });
        this.userForm.get('reciept')?.updateValueAndValidity();
        
        // Display preview for images
        if (file.type.match('image/.+')) {
          const previewElement = document.querySelector('.upload-preview');
          if (previewElement) {
            previewElement.innerHTML = `<img src="${reader.result}" width="200">`;
          }
        }
      };
      
      reader.readAsDataURL(file);
    }
  }

  

  // Submit Data
  submitForm() {

    // Add this to your submitForm() method
  if (!this.selectedFile || !this.userForm.valid) {
    console.log('Form is invalid or missing file');
    return;
  }

  // Log the entire form data in a readable format
  console.log('Complete Form Data:', JSON.stringify(this.userForm.value, null, 2));
  
  // Rest of your submitForm code...
}



    // if (!this.selectedFile || !this.userForm.valid) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Please complete all fields and upload a valid file.',
    //     icon: 'error'
    //   });
    //   return;
    // }
  
    // const formData = new FormData();
    
    // // Add form fields
    // Object.keys(this.userForm.value).forEach(key => {
    //   if (key !== 'reciept') {
    //     formData.append(key, this.userForm.value[key]);
    //   }
    // });
    
    // // Add file
    // formData.append('reciept', this.selectedFile);
    
    // Send to backend
    // this.http.post('/api/upload-form', formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).subscribe({
    //   next: (event) => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       const percentDone = Math.round((event.loaded * 100) / event.total);
    //       console.log(`File is ${percentDone}% loaded`);
    //     }
    //   },
    //   error: (error) => {
    //     Swal.fire({
    //       title: 'Error!',
    //       text: 'Failed to submit form. Please try again.',
    //       icon: 'error'
    //     });
    //   },
  //     complete: () => {
  //       Swal.fire({
  //         title: 'Success!',
  //         text: 'Form submitted successfully',
  //         icon: 'success'
  //       }).then(() => {
  //         this.mmtFormService.closeDialog();
  //         this.router.navigate(['/much-more-tribe']);
  //       });
  //     }
  //   });
  // }
}
// }