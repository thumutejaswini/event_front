import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  events,
  UniqueConstraintError,
} from './events';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  Read3(startDate: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  private url = 'http://localhost:3000/';

  Insert(
    Details:events
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    console.log("service");
    console.log(Details);
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'events/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(orgBy: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/Read${orgBy}`);
  }
  Read0(orgBy: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/0Read${orgBy}`);
  }
  Read1(orgBy: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/1Read${orgBy}`);
  }
  Read2(prgType: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/2Read${prgType}`);
  }
  Read4(prgTheme: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/4Read${prgTheme}`);
  }
  Read5(startDate: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/5Read${startDate}`);
  }
  Read6(mode_session: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}events/6Read${mode_session}`);
  }
  Delete(orgby: String): Observable<InsertedSuccess> {
    console.log(`${this.url}events/Delete${orgby}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}events/Delete${orgby}`
    );
  }
  Update(orgby: String, Details: events) {
    return this.http.put(`${this.url}events/Update${orgby}`, Details, {
      headers: this.headers,
    });
  }  
  }
  