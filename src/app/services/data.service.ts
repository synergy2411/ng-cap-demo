import { User } from './../model/user.model';
import { USER_DATA } from './../data/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  getUserData(){
    return USER_DATA;
  }
  getUserJsonData(){
    // All Http Calls (GET, POST, DELETE, PUT) will return Observables
    return this.http.get("./assets/data/user-data.json")
      .map(response => <User[]>response.json())
      // .subscribe(data=>{
      //   console.log(data);
      // })
  }

  getUserJsonDatafromClient(){
    this.httpClient.get("https://ng-cap-demo.firebaseio.com/users.json")
      .subscribe(data=>{console.log(data)});
  }

  constructor(private http : Http, private httpClient : HttpClient) { }

}
