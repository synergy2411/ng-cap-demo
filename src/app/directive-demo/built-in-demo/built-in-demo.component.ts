import { User } from './../../model/user.model';
import { USER_DATA } from './../../data/mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-demo',
  templateUrl: './built-in-demo.component.html',
  styleUrls: ['./built-in-demo.component.css']
})
export class BuiltInDemoComponent implements OnInit {

  users : User[];

  constructor() { }

  ngOnInit() {
    this.users = USER_DATA;
  }
  moreInfo(user : User){}

}
