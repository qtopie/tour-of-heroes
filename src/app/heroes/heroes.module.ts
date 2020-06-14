import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './shared/hero.service';

@NgModule({
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent,
    ],
    exports: [HeroSearchComponent],
    imports: [
        SharedModule,
    ],
    providers: [HeroService],
})

export class HeroesModule { }
