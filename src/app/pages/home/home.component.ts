import { Component } from '@angular/core';
import { Category } from '@interfaces/category/category';
import { Product } from '@interfaces/product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [
    {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    }, 
    {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    }, 
    {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
     {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    }, 
    {
      title: "Smash da casa",
      description: "2x hambúrguer 200g",
      value: 30.50,
      image: "../../../../assets/hambuguer.png"
    },
  ];

  categories: Category[] = [
    {
      name: "Combos",
      image: "../../../../assets/hambuguer.png"
    },
     {
      name: "Acompanhamentos",
      image: "../../../../assets/hambuguer.png"
    },
     {
      name: "Bebidas",
      image: "../../../../assets/hambuguer.png"
    }, {
      name: "Sobremesas",
      image: "../../../../assets/hambuguer.png"
    }
  ]
}
