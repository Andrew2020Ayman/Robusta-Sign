import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {path: '',redirectTo: 'login', pathMatch: 'full' },
    {path: 'login' , component: LoginComponent},
    {path:'register' , component:RegisterComponent}
  
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
    ],
    declarations: [LoginComponent,RegisterComponent]
})
export class SignModule { }
