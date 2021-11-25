import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { ProjectDto } from '../models/dto/projectDto';
import { Project } from '../models/project';


@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getProjects(): Observable<ListResponseModel<ProjectDto>> {
        let newPath = this.apiUrl + "projects/getall"
        return this.httpClient.get<ListResponseModel<ProjectDto>>(newPath);
    }

    add(project:Project):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"projects/add",project)
      }

      delete(project:Project):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"projects/delete",project)
      }

      update(project:Project):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"projects/update",project)
      }

      
}