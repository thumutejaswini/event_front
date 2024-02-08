import { Component ,OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { InsertedSuccess, Read, events} from '../events';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: EventsService) {}
  mode_session: String = '';
  GotResult: Boolean = false;
  Results6=[];
  a=[];

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

  Read(mode_session: String) {
    return this.Service.Read6(mode_session).subscribe({
      next: (Data: Read) => {
        // console.log("i am read function");
        this.Results6 = Data.Result;
        for (let i = 0; i < this.Results6.length; i++) {
          this.a = this.Results6[i];
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
        };
        // console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err: any) => {
        console.log(Err);
      },
    });
}
  Read6(mode_session: String) {
    this.Service.Read(mode_session).subscribe({
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
  Update(mode_session: String, Details: events) {
    this.Service.Update(mode_session, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read6('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(mode_session: String) {
    this.Service.Delete(mode_session).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read6('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}

