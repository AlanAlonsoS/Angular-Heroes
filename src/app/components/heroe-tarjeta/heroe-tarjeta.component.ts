import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
   @Input() heroe: any = {};
   @Input() index: number;

   @Output() heroeSleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSleccionado.emit(this.index);
  }

}
