import { Component, OnInit } from '@angular/core';

import { HeroesService } from 'src/app/services/heroes.service';

import Heroe from '../../services/models/Hero';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private service: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  getHeroe(id: number): void {
    this.router.navigate(['/heroe', id]);
  }
}
