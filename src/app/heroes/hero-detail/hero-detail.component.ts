
import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.heroService.getHero(+params.id)))
            .subscribe(hero => this.hero = hero);
    }
    save(): void {
        this.heroService.update(this.hero)
            .subscribe(() => this.goBack());
    }
    goBack(): void {
        this.location.back();
    }
}
