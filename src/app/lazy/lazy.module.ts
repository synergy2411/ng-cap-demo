import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { LAZY_ROUTES } from './lazy.routes';
 

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(LAZY_ROUTES)
  ],
  declarations: [IAmLazyComponent]
})
export class LazyModule { }
