import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getUsers(){
    return this._http.get('http://www.mocky.io/v2/5e34de6e2f000072007933bb');
  }
}
