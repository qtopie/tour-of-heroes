import { NgModel, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [

    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ]
})
export class SharedModule { }
