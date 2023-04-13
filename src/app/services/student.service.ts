import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  studentSignUp(data :any)
  {
    return this.http.post("http://localhost:3000/studentsignup", data);
  }
}
