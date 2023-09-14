import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  register,
  UniqueConstraintError,
} from './register';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });



private url = 'http://localhost:3000/';

Insert(
  Details: register
): Observable<InsertedSuccess | UniqueConstraintError> {
  return this.http.post<InsertedSuccess | UniqueConstraintError>(
    this.url + 'reg/Insert',
    Details,
    { headers: this.headers }
  );
}
Read(username: String): Observable<Read> {
 
  return this.http.get<Read>(`${this.url}reg/Read${username}`);
}
Delete(username: String): Observable<InsertedSuccess> {
  console.log(`${this.url}reg/Delete${username}`);
  return this.http.delete<InsertedSuccess>(
    `${this.url}reg/Delete${username}`
  );
}
Update(username: String, Details: register) {
  return this.http.put(`${this.url}reg/Update${username}`, Details, {
    headers: this.headers,
  });
}  
}


