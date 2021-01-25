import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

constructor(
  private _http: HttpClient
) { }

getUser(): Promise<any> {
  return this._http.post('https://api.dev.farmbook.co/mbapi/test', {
    "fn": "nodeJS"
  }).toPromise()
}

}
