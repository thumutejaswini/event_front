import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormgetComponent } from './formget/formget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { AboutComponent } from './about/about.component';
import { ProgramtypeComponent } from './programtype/programtype.component';
import { StartdateComponent } from './startdate/startdate.component';
import { ModeComponent } from './mode/mode.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OrgbyComponent } from './orgby/orgby.component';


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
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'programtype',
    component:ProgramtypeComponent

  },
  
  {
    path:'startdate',
    component:StartdateComponent
  },
  {
    path:'mode',
    component:ModeComponent
  },
  {
    path:'buttons',
    component:ButtonsComponent
  },
  {
    path:'orgby',
    component:OrgbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
