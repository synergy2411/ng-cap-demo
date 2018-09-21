
import { User } from './../model/user.model';
import { Component, Input } from '@angular/core';
import { USER_DATA } from './../data/mocks';

@Component({
    selector : "app-users",
    // template : `<h1 class="container">Users Component Loaded Successfully!</h1>`
    templateUrl : './users.component.html'
})
export class UsersComponent{

    user : User;

    constructor(){}
    ngOnInit(){
       this.user = USER_DATA;
    }
    @Input('title') title : string;

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!`);
    }
}