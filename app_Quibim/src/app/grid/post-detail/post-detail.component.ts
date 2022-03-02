import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private restService: RestService) { }
  
  public respuesta:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap

      this.addData(params.variable)
    })
  } 
  addData(id:string){
    this.restService.get(`https://history.muffinlabs.com/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
    } )
  }

}
