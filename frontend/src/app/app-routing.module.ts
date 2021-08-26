import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterAssignmentComponent } from './home/register-assignment/register-assignment.component';
import { RegisterCourseComponent } from './home/register-course/register-course.component';
import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerAssignment',
    component: RegisterAssignmentComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
