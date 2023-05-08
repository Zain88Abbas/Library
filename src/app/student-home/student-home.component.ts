import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent {
  constructor (private student:StudentService){}
  ngOnInit(): void{
    this.student.reloadStudent();
  }
}
