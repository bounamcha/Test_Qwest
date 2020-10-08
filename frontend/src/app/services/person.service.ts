import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';
import * as AppUtil from '../common/app.util';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }


savePerson(user) {
  const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
  const httpOptions = {
      headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',

            'Authorization':`Bearer ${token}`,
          }
      )
  }
  return this.http.post('http://localhost:3000/person.routes/add', user, httpOptions);
}

getPerson(query) {
  const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
  const httpOptions = {
      headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',

            'Authorization':`Bearer ${token}`,
          }
      )
  }
  return this.http.post('http://localhost:3000/person.routes/list', query,  httpOptions)
}

deletePerson(id) {
  const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
  const httpOptions = {
      headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',

            'Authorization':`Bearer ${token}`,
          }
      )
  }
  return this.http.delete(`http://localhost:3000/person.routes/remove/${id}`,  httpOptions);
}



updatePerson(id) {
  const token = localStorage.getItem(AppUtil.AUTH_TOKEN);
  const httpOptions = {
      headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',

            'Authorization':`Bearer ${token}`
          }
      )
  }
  return this.http.put(`http://localhost:3000/person.routes/update/${id}`, httpOptions);
}
}
