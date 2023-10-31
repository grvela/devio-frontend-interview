import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { CategoryComponent } from '@components/category/category.component';
import { DialogComponent } from '@components/dialog/dialog.component';
import { ProductComponent } from '@components/product/product.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
    declarations:[
        ProductComponent,
        CategoryComponent,
        InputNumberComponent,
        DialogComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        DynamicDialogModule,
    ],
    exports: [
        ProductComponent,
        CategoryComponent,
        InputNumberComponent,
        DialogComponent,
    ]
})
export class ComponentsModule {}