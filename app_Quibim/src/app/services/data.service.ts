import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    http.get('https://history.muffinlabs.com/date');
   }
   getDataToday(): Observable<any>{
    return this.http.get('https://history.muffinlabs.com/date');
    }

}
