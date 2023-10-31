import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToastModule } from 'primeng/toast';

import { ComponentsModule } from "@components/index.module";
import { HomeComponent } from "@pages/home/home.component";

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations:[
        HomeComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule, 
        InputTextModule,
        ToastModule
    ],
    exports: [
        HomeComponent, 
    ]
})
export class PagesModule {}