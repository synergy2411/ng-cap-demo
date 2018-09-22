import { BuiltInDemoComponent } from './directive-demo/built-in-demo/built-in-demo.component';
import { PipeDemoComponent } from './pipes-demo/pipe-demo/pipe-demo.component';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';
import { Routes } from '@angular/router';
import { ModelFormDemoComponent } from './model-form-demo/model-form-demo.component';

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
    component: BuiltInDemoComponent
}, {
    path: "**",
    redirectTo: "login",
    pathMatch: 'full'
}
]