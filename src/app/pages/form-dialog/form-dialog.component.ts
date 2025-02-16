import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MmtformService } from 'src/app/services/mmtform.service';
import { Step } from 'src/app/interface/form';
import Swal from 'sweetalert2';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  currentStep = 1;
  userForm!: FormGroup;
  selectedFile: File | null = null;
  isSubmitting = false;

  steps: Step[] = [
    { title: 'Personal Information', completed: false },
    { title: 'Additional Questions', completed: false },
    { title: 'File Upload', completed: false },
  ];

  constructor(
    public mmtFormService: MmtformService,
    private fB: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.userForm = this.fB.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+0-9]{1,4}[- ]?([0-9]{10})$'),
        ],
      ],
      is_member: ['', [Validators.required]],

      //step2
      class: ['', [Validators.required]],
      experience: ['', Validators.required],
      previous_class: ['', Validators.required],

      //step3
      mentor: ['', Validators.required],
      reciept: ['', Validators.required],
    });
  }

  private initForm(): void {
    this.userForm = this.fB.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+0-9]{1,4}[- ]?([0-9]{10})$'),
        ],
      ],
      is_member: ['', [Validators.required]],

      // step2
      class: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      previous_class: ['', [Validators.required]],

      // step3
      mentor: ['', [Validators.required]],
      reciept: ['', [Validators.required]],
    });
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire('Error', 'File size should not exceed 10MB', 'error');
        return;
      }
      this.selectedFile = file;
    }
  }

  nextStep(): void {
    if (!this.userForm) return;

    const currentStepValid = this.validateCurrentStep();

    if (!currentStepValid) {
      Swal.fire('Error', 'Please fill all required fields correctly', 'error');
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
    if (!this.userForm) return false;

    const form = this.userForm;

    switch (this.currentStep) {
      case 1:
        return form.get('fullName')?.valid &&
          form.get('email')?.valid &&
          form.get('phone_number')?.valid &&
          form.get('is_member')?.valid
          ? true
          : false;
      case 2:
        return form.get('class')?.valid &&
          form.get('experience')?.valid &&
          form.get('previous_class')?.valid
          ? true
          : false;
      case 3:
        return form.get('mentor')?.valid &&
          form.get('reciept')?.valid &&
          !!this.selectedFile
          ? true
          : false;
      default:
        return false;
    }
  }

  onSubmit(): void {
    if (this.userForm?.valid && this.selectedFile && !this.isSubmitting) {
      this.isSubmitting = true;
      const formData = new FormData();

      Object.keys(this.userForm.value).forEach((key) => {
        formData.append(key, this.userForm.value[key]);
      });
      formData.append('file', this.selectedFile);

      this.registrationService.submitRegistration(formData).subscribe({
        next: (response) => {
          Swal.fire(
            'Success',
            'Registration submitted successfully!',
            'success'
          );
          this.resetForm();
          this.mmtFormService.closeDialog();
        },
        error: (error) => {
          Swal.fire(
            'Error',
            error.error?.message ||
              'Failed to submit registration. Please try again.',
            'error'
          );
          console.error('Registration error:', error);
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
    } else {
      Swal.fire(
        'Error',
        'Please complete all required fields before submitting.',
        'error'
      );
    }
  }

  private resetForm(): void {
    this.userForm.reset();
    this.currentStep = 1;
    this.steps.forEach((step) => (step.completed = false));
    this.selectedFile = null;
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
