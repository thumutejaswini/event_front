import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  register,
  UniqueConstraintError,
} from '../register';
import { RegisterService } from '../register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private Service: RegisterService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: register = {
    name: '',
    mail: '',
    password: '',
    phonenumber: '',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} Register Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
