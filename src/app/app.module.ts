import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
