export interface RegistrationData {
    fullName: string;
    email: string;
    phone: string;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    file?: File;
  }
  
  export interface Step {
    title: string;
    completed: boolean;
  }
  