import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestokService {
  private finaldata = [];
  private apiurl = 'http://127.0.0.1:8000/api/intervenants';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiurl);
  }
}
