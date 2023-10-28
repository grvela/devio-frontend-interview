import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardModule } from 'primeng/card';

import { ProductComponent } from "@components/product/product.component";

@NgModule({
    declarations:[
        ProductComponent
    ], 
    imports: [
        CommonModule,
        CardModule
    ],
    exports: [
        ProductComponent
    ]
})
export class ComponentsModule {}