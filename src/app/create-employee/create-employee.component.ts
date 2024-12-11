import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  id:string = "";

public employeeForm:FormGroup = new FormGroup(
  {
    id: new FormControl(),
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    hikes: new FormArray([]),
    workMode: new FormControl(),
    // travel fee: new  FormControl(),
    // wifi bill
    gender: new FormControl(),
   
})

get hikesFormArray(){
  return this.employeeForm.get('hikes') as FormArray;
}

addhike(){
  this.hikesFormArray.push(
    new FormGroup({
      year: new FormControl(),
      percentage: new FormControl(),
    })
  )
}

deletehike(i:number){
  this.hikesFormArray.removeAt(i);
}

constructor(private _employeeService:EmployeeService, private _activatedRoute: ActivatedRoute){

  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id = data.id;
      // API call
      _employeeService.getEmployee(data.id).subscribe(
        (data:any)=>{
          this.employeeForm.patchValue(data);
        }
      )
    }
  )

  this.employeeForm.get("WorkMode")?.valueChanges.subscribe(
    (data:any)=>{
  
      if(data=='workFromOffice'){
        this.employeeForm.addControl('travelBill', new FormControl());
        this.employeeForm.removeControl('wifibill');
      }
      else{
        this.employeeForm.addControl('wifibill', new FormControl());
        this.employeeForm.removeControl('travelBill');
      }
    }
  )
  
  }

submit(){
  if(this.id){
    // console.log(this.employeeForm);
     // edit
      this._employeeService.updateEmployee(this.id,this.employeeForm.value).subscribe(
        (data:any)=>{
        alert("create succesfully");
        },
        (err:any)=>{
        alert("Creation Failed");
        }
      )
    }
  else{
      // create
      this._employeeService.createEmployee(this.employeeForm).subscribe(
        (data:any)=>{
        alert("create sucesfuly");
        },
      (err:any)=>{
      alert("Creation Failed");
      } 
    )
  }
} 
}

