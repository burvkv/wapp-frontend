import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { EmployeeDto } from '../models/dto/EmployeeDto';
import { Employee } from '../models/Employee';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getEmployees():Observable<ListResponseModel<EmployeeDto>> {
        let newPath = this.apiUrl + "employees/getall"
        return this.httpClient.get<ListResponseModel<EmployeeDto>>(newPath);
      }

      getEmployeesCount():Observable<SingleResponseModel<CountOfEmployees>>{
          let newPath = this.apiUrl + "employees/getemployeescount"
          return this.httpClient.get<SingleResponseModel<CountOfEmployees>>(newPath);
      }

      add(employee:Employee):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"employees/add",employee)
      }

      delete(employee:Employee):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"employees/delete",employee)
      }
      update(employee:Employee):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"employees/update",employee)
      }
}

export interface CountOfEmployees{
    count:number;
    isActive:boolean;
}