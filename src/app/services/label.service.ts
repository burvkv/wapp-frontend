import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Label } from '../models/label';

@Injectable({
    providedIn: 'root'
})

export class LabelService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getLabels():Observable<ListResponseModel<Label>> {
        let newPath = this.apiUrl + "labels/getall"
        return this.httpClient.get<ListResponseModel<Label>>(newPath);
      }

      add(label:Label):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"labels/add",label)
      }

      Delete(label:Label):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"labels/delete",label)
      }

      update(label:Label):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"labels/update",label)
      }
}