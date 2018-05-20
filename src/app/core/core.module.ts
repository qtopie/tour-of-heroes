import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoggerService } from "./logger.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule, // we use ngFor
        DashboardModule
    ],
    exports: [],
    declarations: [],
    providers: [LoggerService]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
