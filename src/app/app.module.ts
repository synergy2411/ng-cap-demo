import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { BuiltInDemoComponent } from './directive-demo/built-in-demo/built-in-demo.component';

@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent, 
    LifeCycleDemoComponent, BuiltInDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
