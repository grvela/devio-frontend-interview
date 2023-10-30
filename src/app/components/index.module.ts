import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardModule } from 'primeng/card';

import { ProductComponent } from '@components/product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    declarations:[
        ProductComponent,
        CategoryComponent
    ], 
    imports: [
        CommonModule,
        CardModule
    ],
    exports: [
        ProductComponent,
        CategoryComponent
    ]
})
export class ComponentsModule {}