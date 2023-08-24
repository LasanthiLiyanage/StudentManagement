import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { NgbModal,NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent  implements OnInit{
  sideNavStatus:boolean = false;
  students: Student[] = [];
  selectedStudent: any;
  @ViewChild('studentPopup') studentPopup: any;
  model: NgbDateStruct | undefined;

  constructor(private studentService: StudentService,private renderer: Renderer2,private modalService: NgbModal){}

  ngOnInit(){
     this.studentService
     .GetAllStudents()
     .subscribe((result: Student[]) => (this.students = result));
  }
  

  openPopup2(student: any): void {
    this.selectedStudent = student;
    this.renderer.addClass(this.studentPopup.nativeElement, 'show');
  }

  openPopup(rowData: any) {
    const modalRef = this.modalService.open(StudentEditComponent, { size: 'lg' }); // Adjust size if needed
    modalRef.componentInstance.rowData = rowData; // Pass data to the popup component
   
  }

  closePopup(): void {
    this.renderer.removeClass(this.studentPopup.nativeElement, 'show');
  }

/*   studentList()void{

  } */
}
