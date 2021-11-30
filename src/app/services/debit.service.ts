import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { DebitForGetDto } from '../models/dto/debitForGetDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitService {

  apiUrl='https://localhost:44324/api/';
  constructor(private httpClient:HttpClient) { }

  getDebits():Observable<ListResponseModel<DebitForGetDto>>{
    let newPath = this.apiUrl + "debits/getall";
    return this.httpClient.get<ListResponseModel<DebitForGetDto>>(newPath);
  }
}
