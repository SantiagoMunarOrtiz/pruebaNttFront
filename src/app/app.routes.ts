import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './topics/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './topics/reactive-form-validation/reactive-form-validation.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';


export const routes: Routes = [
    {
        path: 'reactive-form-validation',
        component: ReactiveFormValidationComponent  // Usar el componente standalone directamente
    },
    {
        path:'templateFormValidation',
        component:TemplateFormValidationComponent
    },
    {
        path:'reactiveFormValidation',
        component:ReactiveFormValidationComponent
    },
    {
        path:'control-flow',
        component:ControlFlowComponent
    }
];
