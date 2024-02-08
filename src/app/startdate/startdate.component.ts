import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { InsertedSuccess, Read, events } from '../events';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-startdate',
  templateUrl: './startdate.component.html',
  styleUrls: ['./startdate.component.css']
})
export class StartdateComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: EventsService) { }
  startDate: String = '';
  GotResult: Boolean = false;
  Results5 = [];
  a = [];

  UpdatedUser: events = {
    orgBy: '',
    prgCoordinator: '',
    prgType: '',
    prgTheme: '',
    startDate: '',
    endDate: '',
    prgDuration: '',
    num_std: '',
    num_faculty: '',
    num_externals: '',
    num_rsrc_person: '',
    amount: '',
    mode_session: '',
    remarks: '',
    objective: '',
    benifits: '',
    images_url: '',
  };
  Results = [];

  Read(startDate: String) {
    this.Service.Read5(startDate).subscribe({
      next: (Data: Read) => {
        console.log("i am read function");
        this.Results5 = Data.Result;
        for (let i = 0; i < this.Results5.length; i++) {
          this.a = this.Results5[i];
        }
        console.log(this.a);
        // console.log(this.Results2)

        this.UpdatedUser = {

          orgBy: this.a[0],
          prgCoordinator: this.a[1],
          prgType: this.a[2],
          prgTheme: this.a[3],
          startDate: this.a[4],
          endDate: this.a[5],
          prgDuration: this.a[6],
          num_std: this.a[7],
          num_faculty: this.a[8],
          num_externals: this.a[9],
          num_rsrc_person: this.a[10],
          amount: this.a[11],
          mode_session: this.a[12],
          remarks: this.a[13],
          objective: this.a[14],
          benifits: this.a[15],
          images_url: this.a[16],

        }
        // console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
  }
  Read5(startDate: String) {
    this.Service.Read(startDate).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        console.log(this.Results);
        // console.log("hi")

        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(startDate: String, Details: events) {
    this.Service.Update(startDate, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read5('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(startDate: String) {
    this.Service.Delete(startDate).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read5('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}

