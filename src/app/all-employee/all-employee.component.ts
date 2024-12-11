import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent {

  employees:any=[];
  term: string = "";


  constructor(private _employeeService:EmployeeService){

    _employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employees = data;
        console.log(this.employees);
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  filter(){
    this._employeeService.getFilteredEmployee(this.term).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }


  column:string = "";
  order:string = "";

  sort(){
    this._employeeService.getSortedEmployee(this.column, this.order).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  limit:number = 0;
  page:number = 0;

  pagination(){
    this._employeeService.getPagedEmploye(this.limit, this.page).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  delete(id:string){
    this._employeeService.deleteEmployee(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Ineternal server error");
      }
    )
  }

}
