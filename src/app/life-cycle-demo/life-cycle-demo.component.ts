import { Component, OnInit, 
    OnChanges, 
    DoCheck, 
    AfterViewChecked, 
    AfterViewInit, 
    AfterContentChecked, 
    AfterContentInit, 
    OnDestroy, 
    Input,
    SimpleChanges} from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent implements OnInit, 
  OnChanges, DoCheck, AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit, OnDestroy {

    @Input('title') title : string;

  constructor() { 
    console.log("constructor");
    // let obj = new UsersComponent();
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnChanges(change : SimpleChanges){
    console.log("ngOnChanges", change);
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
