import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private acRoute: ActivatedRoute, private service: HeroesService) {
    this.acRoute.params.subscribe(params => {
      this.heroe = this.service.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
