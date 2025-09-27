import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MmtformService } from 'src/app/services/mmtform.service';
import { Step } from 'src/app/interface/form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  currentStep = 1;
  userForm!: FormGroup;
  steps: Step[] = [
    { title: 'Personal Information', completed: false },
    { title: 'Additional Questions', completed: false },
    { title: 'Confirm & Pay', completed: false },
  ];

  constructor(
    public mmtFormService: MmtformService,
    private fB: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fB.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      isMember: ['', Validators.required],
      class: ['', Validators.required],
      experience: ['', Validators.required],
      previousClass: ['', Validators.required],
      mentor: ['', Validators.required],
      reciept: ['', Validators.required],
    });
  }

  nextStep(): void {
    if (!this.validateCurrentStep()) {
      Swal.fire('Error', 'Please fill all required fields correctly.', 'error');
      return;
    }
    if (this.currentStep < 3) {
      this.steps[this.currentStep - 1].completed = true;
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    const form = this.userForm;
    switch (this.currentStep) {
      case 1:
        return form.get('fullName')?.valid &&
          form.get('email')?.valid &&
          form.get('phoneNumber')?.valid &&
          form.get('isMember')?.valid
          ? true
          : false;
      case 2:
        return form.get('class')?.valid &&
          form.get('experience')?.valid &&
          form.get('previousClass')?.valid
          ? true
          : false;
      case 3:
        return form.get('mentor')?.valid && form.get('reciept')?.valid
          ? true
          : false;
      default:
        return false;
    }
  }

  redirectToPayment(): void {
    if (!this.userForm.valid) {
      Swal.fire('Error', 'Please complete all required fields.', 'error');
      return;
    }

    const selectedClass = this.userForm.get('class')?.value;

    let paymentUrl = '';
    switch (selectedClass) {
      case 'Silver':
        paymentUrl = 'https://flutterwave.com/pay/bjfpcvj5jazk';
        break;
      case 'Gold':
        paymentUrl = 'https://flutterwave.com/pay/td8fwlqr9uph';
        break;
      case 'Exclusive':
        paymentUrl = 'https://flutterwave.com/pay/zja3krszxuai';
        break;
      default:
        Swal.fire('Error', 'Please select a class to continue.', 'error');
        return;
    }

    window.location.href = paymentUrl;
  }

  getErrorMessage(controlName: string): string {
    const control = this.userForm?.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) return 'This field is required';
      if (control.errors['email']) return 'Please enter a valid email';
      if (control.errors['pattern']) return 'Please enter a valid phone number';
    }
    return '';
  }
}
