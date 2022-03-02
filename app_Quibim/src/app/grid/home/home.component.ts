import { Observable } from 'rxjs';
import { DetailService } from 'src/app/services/detail.service';
import { RestService } from './../../services/rest.service';
import { Component, OnInit, Input } from '@angular/core';
import { json } from 'express';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  numSequence(n: number): Array<number> {
    return Array(n);
  }
public historyList: any =[];
public fechaNacimiento = Date;

  @Input() dataEntrante1: any;
  constructor(private restService: RestService, private detailService: DetailService) { }

  ngOnInit(): void {
    this.addData();
  }
    public addData(){
      this.restService.get(`https://history.muffinlabs.com/`)
      .subscribe(respuesta => {
        this.historyList = respuesta;
        this.detailService.openDetailComponent.emit({
          data:this.dataEntrante1
        });
      })
    }
    public addBirthData(fechaNacimiento: Date){
      this.restService.get(`https://hisrorymuffinslabs.com,${fechaNacimiento}`)
      .subscribe(respuesta => {
        this.historyList = respuesta;
        this.detailService.openDetailComponent.emit({
          data:this.fechaNacimiento
        });
      })
    }
  }


