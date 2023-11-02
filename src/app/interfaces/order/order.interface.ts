import { Optional } from "@interfaces/optional/optional";
import { Product } from "@interfaces/product/product";

export interface Order{
    product: Product;
    amount: number;
    options: Optional[];
    notes: string;
    totalPrice: number
}