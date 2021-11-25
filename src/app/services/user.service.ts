import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getCurrentUser():Observable<SingleResponseModel<User>> {
        let newPath = this.apiUrl + "users/getcurrentuser"
        return this.httpClient.get<SingleResponseModel<User>>(newPath);
      }
      
}
