import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

   public GetAllStudents() : Observable<Student[]>{

    return this.http.get<Student[]>(this.baseApiUrl + '/api/student')

   }
 
   AddSudent(student:Student){
    student.id='00000000-0000-0000-0000-000000000000'
    this.http.post(this.baseApiUrl,student);
   }
}
