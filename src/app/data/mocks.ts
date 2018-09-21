import { User } from './../model/user.model';

export const USER_DATA : User []= [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    company : "Microsoft",
    isWorking : true,
    vote : 120,
    image : './assets/images/bill.jpg'

},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Jan 21, 1965"),
    income : 0,
    company : "Apple",
    isWorking : false,
    vote : 100,
    image : './assets/images/steve.png'

},{
    firstName : "Tim B",
    lastName : "Lee",
    dob : new Date("Feb 3, 1965"),
    income : 40000,
    company : "World Wide",
    isWorking : true,
    vote : 180,
    image : './assets/images/tim.jpg'

}]