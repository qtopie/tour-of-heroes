import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./shared/hero.service";
import { SharedModule } from "../shared/shared.module";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { CommonModule } from "@angular/common";


// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../shared/in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
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