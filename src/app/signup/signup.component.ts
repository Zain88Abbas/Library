import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private student: StudentService) {

  }
  signUp(data: object): void {
    console.warn(data);
    this.student.studentSignUp(data).subscribe((result)=>{
      console.warn(result);
    });
  }
}

