import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-form-demo',
  templateUrl: './model-form-demo.component.html',
  styleUrls: ['./model-form-demo.component.css']
})
export class ModelFormDemoComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [
    Validators.required
  ]);

  signupForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.signupForm = this.fb.group({
      username : this.username,
      password : this.password
    })
   }

   signup(){
     console.log(this.signupForm);
   }
  ngOnInit() {
  }

}
