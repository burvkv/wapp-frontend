import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { DebitStatus } from '../models/debitStatus';

@Injectable({
    providedIn: 'root'
})

export class DebitStatusService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getDebitStatuses():Observable<ListResponseModel<DebitStatus>> {
        let newPath = this.apiUrl + "debitstatuses/getall"
        return this.httpClient.get<ListResponseModel<DebitStatus>>(newPath);
      }

      add(debitStatus:DebitStatus):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"debitstatuses/add",debitStatus)
      }
    
      delete(debitStatus:DebitStatus):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"debitstatuses/delete",debitStatus)
      }
    
}