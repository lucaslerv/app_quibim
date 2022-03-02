import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  this.dataService.getDataToday();
  }

}
