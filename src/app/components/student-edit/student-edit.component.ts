import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent  implements OnInit {
  @Input() rowData:any

  studentData: Student = {
    id:'',
    title:'',
    name:'',
    email:'',
    phone:'',
    address:'',
    city:'',
    dateofBirth:'',
    registerdDate:''
  }

  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.onSubmit();
 }

  onSubmit(){
    // this.studentService.AddSudent(this.studentData).subscribe(
    //   result => {
    //     this.studentData = result;
    //   }
    // )
  }

}
