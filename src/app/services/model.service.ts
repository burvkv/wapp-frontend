import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Model } from '../models/model';

@Injectable({
    providedIn: 'root'
})

export class ModelService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getModels():Observable<ListResponseModel<Model>> {
        let newPath = this.apiUrl + "models/getall"
        return this.httpClient.get<ListResponseModel<Model>>(newPath);
      }

      add(model:Model):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"models/add",model)
      }

      delete(model:Model):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"models/delete",model)
      }

      update(model:Model):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"models/update",model)
      }
}