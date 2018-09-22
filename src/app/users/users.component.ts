import { DataService } from './../services/data.service';

import { User } from './../model/user.model';
import { Component, Input } from '@angular/core';
// import { USER_DATA } from './../data/mocks';

@Component({
    selector : "app-users",
    // template : `<h1 class="container">Users Component Loaded Successfully!</h1>`
    templateUrl : './users.component.html'
})
export class UsersComponent{

    users : User[];
    
    constructor(public ds : DataService){
       
    }


    ngOnInit(){
    //    this.users = USER_DATA;
        // this.users = this.ds.getUserData(); 
        this.ds.getUserJsonData()
            .subscribe(data => {
                this.users = data;
            });
    }
    @Input('title') title : string;

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!`);
    }
}