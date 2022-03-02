import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.detailService.openDetailComponent.subscribe(data => {
      console.log('Recibiendo data...' ,data);
    });
  }
}

