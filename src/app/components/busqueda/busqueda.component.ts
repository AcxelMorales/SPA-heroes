import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private active: ActivatedRoute, private service: HeroesService, private router: Router) { }

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.termino = params['term'];
      this.heroes = this.service.buscarHeroe(params['term']);
      console.log(this.heroes);
    });
  }
}
