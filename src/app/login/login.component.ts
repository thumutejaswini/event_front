import { Component,OnInit,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {register , logincredentials } from '../register';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string="";
  public password: string="";
  constructor(private RegisterService:RegisterService, private router: Router) { }
  ngOnInit(): void {

  }
  Subscription: Subscription = new Subscription();
error=false;
  readarray = [];
  user: logincredentials = {
    mail: '',
    password: ''
  }

  Read(Form:NgForm) {
    this.Subscription = this.RegisterService.Read(this.user.mail).subscribe(
      (data: any) => {
        this.readarray = data.Result[0];
        console.log(this.readarray);
        if (data.Result[0]) {
          if (this.readarray[1] == this.user.password) {
         this.router.navigate(['/home'])
          }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}



