import { Component, OnInit } from '@angular/core';
import { DataService } from'../../services/data.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.sass']
})
export class TodayComponent implements OnInit {
 today: any;
 birth: any;
 death: any;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDataToday().subscribe(data => {
      this.today = data;
    });
  }

}
