import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoggerService } from "./logger.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DashboardModule } from '../dashboard/dashboard.module';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../shared/in-memory-data.service';
import { PageNotFoundComponent } from './not-found.component';
import { environment } from 'environments/environment';

@NgModule({
    imports: [
        CommonModule, // we use ngFor ??
        DashboardModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        environment.production ?
            [] : HttpClientInMemoryWebApiModule.forRoot(
                InMemoryDataService, { dataEncapsulation: false }
            ),
    ],
    exports: [],
    declarations: [PageNotFoundComponent],
    providers: [LoggerService]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
