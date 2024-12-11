import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  getEmployees():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
  }

  getEmployee(id:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
  }

  createEmployee(data:any):Observable<any>{
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
  }

  getFilteredEmployee(term:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
  }

  getSortedEmployee(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
  }

  deleteEmployee(id:string):Observable<any>{
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
  }
  getPagedEmploye(limit:number, page: number):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
  }

  updateEmployee(id:string, data:any):Observable<any>{
    return this._httpClient.put("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id,data);
  }

}
