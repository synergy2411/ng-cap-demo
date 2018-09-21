import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  filteredStatus= "";



  todos = [{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "pending"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "pending"
  }]

  data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      return resolve("Here the data arrives!");
    }, 2000);
  })
  contact_no : number = 987654321;


  addNewTodo(){
    this.todos.push({label : "New Work", status : 'pending'});
  }

}
