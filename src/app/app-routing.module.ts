import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './components/student-view/student-view.component';

const routes: Routes = [
  {path:'student',component: StudentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
