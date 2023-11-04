import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';

import { ComponentsModule } from "@components/index.module";
import { HomeComponent } from "@pages/home/home.component";

import { InputTextModule } from 'primeng/inputtext';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    declarations:[
        HomeComponent,
        PaymentComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule, 
        InputTextModule,
        ToastModule,
        SkeletonModule,
        ButtonModule
    ],
    exports: [
        HomeComponent, 
        PaymentComponent
    ]
})
export class PagesModule {}