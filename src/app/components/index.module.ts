import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardModule } from 'primeng/card';

import { GridProductComponent } from '@components/grid-product/grid-product.component';
import { ProductComponent } from '@components/product/product.component';

@NgModule({
    declarations:[
        ProductComponent,
        GridProductComponent
    ], 
    imports: [
        CommonModule,
        CardModule
    ],
    exports: [
        ProductComponent,
        GridProductComponent
    ]
})
export class ComponentsModule {}