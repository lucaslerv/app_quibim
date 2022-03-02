import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
public image:string = '';

  constructor() { }

  ngOnInit() void {

    this.image = 'data:image/jpeg;base64,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'
     console.log('llamando componente');
  }

}