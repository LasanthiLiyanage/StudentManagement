import { Component } from '@angular/core';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Management System';
  sideNavStatus:boolean = false;
  studentcom: Student[] = [];

  constructor(){}

  ngOnInit() : void {
    
  }
}
