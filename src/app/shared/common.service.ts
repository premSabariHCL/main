import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  getURL: string = environment.domainURL + ':' + environment.domainPort;
  constructor(private http: HttpClient) { }

  getLoadData(): Observable<any> {
    return this.http.get(this.getURL);
  }

  getUserData(): Observable<any> {
    return this.http.get(environment.userEndPoints);
  }

  getPhotoData(): Observable<any> {
    return this.http.get(environment.photoEndPoints);
  }
  
}
