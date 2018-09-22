import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo',
  templateUrl: './template-form-demo.component.html',
  styleUrls: ['./template-form-demo.component.css']
})
export class TemplateFormDemoComponent implements OnInit {


  submitForm(myForm :NgForm){
    console.log("Submitted.")
  }

  login(myForm : NgForm){
    // console.log(myForm);
    console.log("Username : " + myForm.value.username);
    console.log("Password : " + myForm.value.password);

  }

  signup(){

  }
  constructor() { }

  ngOnInit() {
  }

}
