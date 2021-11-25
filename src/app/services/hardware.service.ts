import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { HardwareDto } from '../models/dto/hardwareDto';
import { Hardware } from '../models/hardware';

@Injectable({
    providedIn: 'root'
})

export class HardwareService {
    apiUrl = 'https://localhost:44324/api/';
    constructor(private httpClient: HttpClient) { }

    getHardwares():Observable<ListResponseModel<HardwareDto>> {
        let newPath = this.apiUrl + "hardwares/getall"
        return this.httpClient.get<ListResponseModel<HardwareDto>>(newPath);
      }

      getHardwaresCountByDebitStatus():Observable<SingleResponseModel<CountOfHardwares>> {
        let newPath = this.apiUrl + "hardwares/gethardwarescountbydebitstatus"
        return this.httpClient.get<SingleResponseModel<CountOfHardwares>>(newPath);
      }

      getHardwaresCountByDefectStatus():Observable<SingleResponseModel<CountOfHardwares>> {
        let newPath = this.apiUrl + "hardwares/gethardwarescountbydefectstatus"
        return this.httpClient.get<SingleResponseModel<CountOfHardwares>>(newPath);
      }

      add(hardware:Hardware):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"hardwares/add",hardware)
      }

      delete(hardware:Hardware):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"hardwares/delete",hardware)
      }

      update(hardware:Hardware):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"hardwares/update",hardware)
      }

      getById(id:number):Observable<SingleResponseModel<Hardware>>{
          let newPath = this.apiUrl + "hardwares/getbyid?id="+id
          return this.httpClient.get<SingleResponseModel<Hardware>>(newPath);
      }
}


export interface CountOfHardwares{
    count:number;
    isActive:boolean;
}

