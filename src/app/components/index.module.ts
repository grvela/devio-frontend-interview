import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CategoryComponent } from '@components/category/category.component';
import { DialogComponent } from '@components/dialog/dialog.component';
import { ProductComponent } from '@components/product/product.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { OptionalComponent } from './optional/optional.component';
import { OrderComponent } from './order/order.component';

@NgModule({
    declarations:[
        ProductComponent,
        CategoryComponent,
        InputNumberComponent,
        DialogComponent,
        CardComponent,
        OptionalComponent,
        CheckboxComponent,
        OrderComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        DynamicDialogModule,
        CheckboxModule,
        InputTextareaModule,
        ButtonModule
    ],
    exports: [
        ProductComponent,
        CategoryComponent,
        InputNumberComponent,
        DialogComponent,
    ]
})
export class ComponentsModule {}