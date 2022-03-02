import { EventEmitter,Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DetailService {
@Output() openDetailComponent: EventEmitter<any> = new EventEmitter();
  
constructor() { }
}
