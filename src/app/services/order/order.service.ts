import { Injectable } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [
    {
      notes: 'Sem cebola',
      amount: 1,
      options: [
         {
            id: 1,
            name: "Bacon",
            description: "10g",
            value: 1,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Made20bacon.png/640px-Made20bacon.png"
        },
        {
            id: 2,
            name: "Cheddar",
            description: "10g",
            value: 1,
            image:"https://queijospresident.com.br/uploads/1568744337-queijo-cheddar-processado-president-fracao.png"
        }
      ],
      totalPrice: 30.50,
      product:   {
        id: 1,
        code: 11,
        tag: "hambuguer",
            title: "x-bacon",
            short_description: "3x bacon",
            long_description: "3x bacon, 2x cheddar, 1x picanha 200g, 4x tomate",
            value: 30.50,
            image: "https://i.pinimg.com/originals/f2/2d/88/f22d887acea42608c997adacee06a00b.png"
        }
    },
    {
      notes: '',
      amount: 1,
      options: [],
      totalPrice: 30.50,
      product:   {
        id: 1,
        code: 11,
        tag: "hambuguer",
            title: "x-bacon",
            short_description: "3x bacon",
            long_description: "3x bacon, 2x cheddar, 1x picanha 200g, 4x tomate",
            value: 30.50,
            image: "https://i.pinimg.com/originals/f2/2d/88/f22d887acea42608c997adacee06a00b.png"
        }
    }

  ];

  set(order: Order): void {
    this.order.push(order);
  }

  get(): Order[] {
    return this.order;
  }
}
