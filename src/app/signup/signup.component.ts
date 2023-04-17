import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private student: StudentService, private router: Router) {

  }
  signUp(data: Signup): void {
    
    this.student.studentSignUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['StudentHome']);
      }
    });
  }
}

