import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormgetComponent } from './formget/formget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'formget',
    component:FormgetComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'mainlogin',
    component:MainloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
