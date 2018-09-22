import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id : string;
  name : string;

  gotoHome(){
    this.router.navigate(['/login']);
  }

  constructor(private route : ActivatedRoute, 
              private router : Router) { 
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.name = params['name'];
    })
  }

  ngOnInit() {
  }

}
