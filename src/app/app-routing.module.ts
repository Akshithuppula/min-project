import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],component: DashboardComponent,children:[
    {path:'home', component: HomeComponent},
    {path:'create-employee', component: CreateEmployeeComponent},
    {path:'all-employee', component: AllEmployeeComponent}
  ]},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
