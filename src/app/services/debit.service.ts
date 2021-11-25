import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { DebitForGetDto } from '../models/dto/debitForGetDto';
import { DebitDetailDto } from '../models/dto/debitDetailDto';
import { DebitForAddDto } from '../models/dto/debitForAddDto';

@Injectable({
    providedIn: 'root'
  })

  export class DebitService{
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

     getDebits():Observable<ListResponseModel<DebitForGetDto>> {
    let newPath = this.apiUrl + "debits/getall"
    return this.httpClient.get<ListResponseModel<DebitForGetDto>>(newPath);
  }

  getDebitDetails(debitId:number):Observable<SingleResponseModel<DebitDetailDto>>{
    let newPath = this.apiUrl + "debits/getdebitdetails?id="+debitId
    return this.httpClient.get<SingleResponseModel<DebitDetailDto>>(newPath);
  }

  add(debit:DebitForAddDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"debits/add",debit)
  }

  delete(debit:DebitForAddDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"debits/delete",debit)
  }

  update(debit:DebitForAddDto):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"debits/update",debit)
  }
     
  }