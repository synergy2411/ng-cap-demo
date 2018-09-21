import { Component } from '@angular/core';

@Component({
    selector : "app-users",
    // template : `<h1 class="container">Users Component Loaded Successfully!</h1>`
    templateUrl : './users.component.html'
})
export class UsersComponent{

    moreInfo(user : any){
        alert(`${user.firstName} is working with ${user.company}!`);
    }

    user = {
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1965"),
        income : 50000,
        company : "Microsoft",
        isWorking : true,
        vote : 120
    }
}