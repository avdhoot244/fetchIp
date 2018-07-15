import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { IpModel } from './IpModel'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private _http:HttpClient) { }
  getIp(): Observable<IpModel>{
    return this._http.get<IpModel>("https://api.ipify.org?format=json")
    
}

}
