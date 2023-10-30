import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ComponentsModule } from "@components/index.module";
import { HomeComponent } from "@pages/home/home.component";

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations:[
        HomeComponent
    ], 
    imports: [
        CommonModule,
        ComponentsModule, 
        InputTextModule
    ],
    exports: [
        HomeComponent, 
    ]
})
export class PagesModule {}