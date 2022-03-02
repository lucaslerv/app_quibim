import { DetailService } from './../../services/detail.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
@Input()dataEntrante: any;

public image:string = '';

  constructor(private detailService: DetailService) { }

  opendetailService(){
    //console.log(this.dataEntrante)
    this.detailService.openDetailComponent.emit({
      data:this.dataEntrante
    });
  }
  ngOnInit(): void {
    console.log(this.dataEntrante);
  } 

}
