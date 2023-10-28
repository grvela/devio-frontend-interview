import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ComponentsModule } from "@components/index.module";
import { HomeComponent } from "@pages/home/home.component";

@NgModule({
    declarations:[
        HomeComponent
    ], 
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent
    ]
})
export class PagesModule {}