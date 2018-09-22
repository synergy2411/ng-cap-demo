import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { OverviewComponent } from './product/overview/overview.component';
import { BuiltInDemoComponent } from './directive-demo/built-in-demo/built-in-demo.component';
import { PipeDemoComponent } from './pipes-demo/pipe-demo/pipe-demo.component';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';
import { Routes } from '@angular/router';
import { ModelFormDemoComponent } from './model-form-demo/model-form-demo.component';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';

export const APP_ROUTES: Routes = [{
    path: "",
    redirectTo: "login",
    pathMatch: 'full'
}, {
    path: "login",
    component: TemplateFormDemoComponent
}, {
    path: 'signup',
    component: ModelFormDemoComponent
}, {
    path: 'pipe',
    component: PipeDemoComponent
}, {
    path: "directive",
    component: BuiltInDemoComponent,
    canActivate : [LoginGaurdService]
},{
    path : 'product/:id/:name',
    component : ProductComponent,
    children : [
        {
            path : "overview",
            component : OverviewComponent
        },{
            path : "spec",
            component : SpecificationComponent
        }
    ]
    
},{
    path : "employee",
    component : EmployeeListComponent
}, {
    path : 'lazy',
    loadChildren : "app/lazy/lazy.module#LazyModule"
},{
    path: "**",
    redirectTo: "login",
    pathMatch: 'full'
}
]