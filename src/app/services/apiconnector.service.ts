import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { jsondata } from '../models/jsondatamodel';

@Injectable({
  providedIn: 'root',
})
export class ApiconnectorService {
  readonly getAPIURL: string = environment.getAPIURL;
  constructor(private http: HttpClient) {}
  getPostData(): Observable<jsondata[]> {
    return this.http.get<jsondata[]>(this.getAPIURL);
  }
}
