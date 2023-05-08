import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  isStudentLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  studentSignUp(data: Signup) {
    this.http.post("http://localhost:3000/studentsignup",
      data,
      { observe: "response" }).subscribe((result) => {
        this.isStudentLoggedIn.next(true);
        localStorage.setItem('Student', JSON.stringify(result.body))
        this.router.navigate(['StudentHome']);
      });
    }
    reloadStudent()
    {
      if (localStorage.getItem('Student')) {

        this.isStudentLoggedIn.next(true);
        this.router.navigate(['StudentHome']);
      }
    }
  }


