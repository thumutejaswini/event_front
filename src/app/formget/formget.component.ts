import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { InsertedSuccess, Read, events} from '../events';
@Component({
  selector: 'app-formget',
  templateUrl: './formget.component.html',
  styleUrls: ['./formget.component.css']
})
export class FormgetComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: EventsService) {}
 orgBy: String = '';
  GotResult: Boolean = false;
  Results2=[];
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

  Read1(orgBy: String) {
    this.Service.Read1(orgBy).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          
orgBy:this.a[0],                                    
prgCoordinator :this.a[1],                          
prgType:this.a[2],                                 
prgTheme:this.a[3],                             
startDate:this.a[4],                              
endDate:this.a[5],                              
prgDuration:this.a[6],                           
num_std :this.a[7],                                 
num_faculty:this.a[8],                         
num_externals:this.a[9],                          
 num_rsrc_person :this.a[10],                        
amount :this.a[11],                             
 mode_session :this.a[12],                       
remarks :this.a[13],                                        
objective:this.a[14],                     
benifits:this.a[15],                                
images_url :this.a[16],
         
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}
  Read(orgBy: String) {
    this.Service.Read(orgBy).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(orgBy: String, Details: events) {
    this.Service.Update(orgBy, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(orgBy: String) {
    this.Service.Delete(orgBy).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error: any) => {
        console.log(Error);
      },
    });
  }
}
