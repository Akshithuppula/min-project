import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

employees:any = {};

constructor(private _activatedRoute:ActivatedRoute,private _EmployeeService:EmployeeService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      // do api call
      _EmployeeService.getEmployee(data.id).subscribe(
        (data:any)=>{
          console.log(data)
          this.employees = data;
        }
      )
    }
  )
}

}
