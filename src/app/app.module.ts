import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms'
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { FormgetComponent } from './formget/formget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormgetComponent,
    LoginComponent,
    RegisterComponent,
    MainloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
     HttpClientModule,
     MatSelectModule,
     FormsModule,
     RouterModule.forRoot([
      {path:'',redirectTo:'/mainlogin',pathMatch:'full'},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
