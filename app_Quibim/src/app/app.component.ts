import { RestService } from './services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app_Quibim';

  constructor ( private restService: RestService){

  }
  public historyList: any = []

  ngOnInit(): void {
  this.addDataToday();
  } 

  public addDataToday(){
    this.restService.get(`https://history.muffinlabs.com/date`)
    .subscribe(respuesta => {this.historyList = respuesta;
    })
  }
}