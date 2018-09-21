import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { BuiltInDemoComponent } from './directive-demo/built-in-demo/built-in-demo.component';
import { HighlightDirective } from './directive-demo/highlight.directive';
import { PipeDemoComponent } from './pipes-demo/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes-demo/country-code.pipe';
import { FilterPipe } from './pipes-demo/filter.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent, 
    LifeCycleDemoComponent, BuiltInDemoComponent, HighlightDirective, PipeDemoComponent, CountryCodePipe, FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
