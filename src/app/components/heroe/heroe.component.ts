import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
       this.heroe = this._heroesService.getHeroe(params['id']);
      //  console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
