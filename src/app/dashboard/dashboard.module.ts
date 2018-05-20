import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { HeroesModule } from "../heroes/heroes.module";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HeroesModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [],
    exports: [ RouterModule]
})

export class DashboardModule{}