import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Signup } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  studentSignUp(data :Signup)
  {
    return this.http.post("http://localhost:3000/studentsignup", data);
  }
}
