import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { ToDoDto } from '../models/dto/toDoDto';
import { ToDo } from '../models/toDo';


@Injectable({
    providedIn: 'root'
})

export class ToDoService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getToDos(): Observable<ListResponseModel<ToDoDto>> {
        let newPath = this.apiUrl + "todos/getall"
        return this.httpClient.get<ListResponseModel<ToDoDto>>(newPath);
    }

    add(todo:ToDo):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"todos/add",todo)
      }

      delete(todo:ToDo):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"todos/delete",todo)
      }

      update(todo:ToDo):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"models/update",todo)
      }
}