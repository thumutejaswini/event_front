import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { InsertedSuccess, Read, events} from '../events';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(private Service: EventsService) {}
 orgBy: String = '';

 

  UpdatedUser: events = {
    orgBy:'',                                  
    prgCoordinator :'',                           
    prgType:'',                                    
    prgTheme:'',                                  
    startDate:'',                                 
    endDate  :'',                                 
    prgDuration :'',                              
    num_std :'',                                  
    num_faculty :'',                             
    num_externals  :'',                         
     num_rsrc_person :'',                         
    amount :'',                                   
     mode_session :'',                         
    remarks  :'',                                         
    objective:'',                       
    benifits  :'',                                
    images_url:'',   

  };
  Results = [];

  GotResult: Boolean = false;
  Read(Form: NgForm) {
    console.log(Form.value.orgBy);
    this.Service.Read1(Form.value.orgBy).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
 
  Read1(Form: NgForm) {
    console.log(Form.value.orgBy);
    this.Service.Read1(Form.value.orgBy).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
 
  Read2(Form: NgForm) {
    console.log(Form.value);
    this.Service.Read2(Form.value.prgType).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  
  // Read4(Form: NgForm) {
  //   console.log(Form.value.prgTheme);
  //   this.Service.Read4(Form.value.prgTheme).subscribe({
  //     next: (Data: Read) => {
  //       this.Results = Data.Result;
  //       this.GotResult = true;
  //     },
  //     error: (Err) => {
  //       console.log(Err);
  //     },
  //   });
  // }

  }



