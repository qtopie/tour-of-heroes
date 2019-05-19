import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './shared/hero.service';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    exports: [HeroSearchComponent]
})

export class HeroesModule { }
