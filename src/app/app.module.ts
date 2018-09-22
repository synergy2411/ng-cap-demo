import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { BuiltInDemoComponent } from './directive-demo/built-in-demo/built-in-demo.component';
import { HighlightDirective } from './directive-demo/highlight.directive';
import { PipeDemoComponent } from './pipes-demo/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes-demo/country-code.pipe';
import { FilterPipe } from './pipes-demo/filter.pipe';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';
import { ModelFormDemoComponent } from './model-form-demo/model-form-demo.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent, 
    LifeCycleDemoComponent, 
    BuiltInDemoComponent, 
    HighlightDirective, 
    PipeDemoComponent, 
    CountryCodePipe, 
    FilterPipe, 
    TemplateFormDemoComponent, 
    ModelFormDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
