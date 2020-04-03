import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, 
      customer:
        { 
          id: 1, 
          name: 'test', 
          state: 'CO', 
          email: 'test@test.ca' 
        },
      total: 230, 
      placed: new Date(2020, 4, 3),
      fulfilled: new Date(2020, 4, 3),
      status: 'Completed'
    },
    {
      id: 2, 
      customer:
        { 
          id: 2, 
          name: 'test', 
          state: 'CO', 
          email: 'test@test.ca' 
        },
      total: 230, 
      placed: new Date(2020, 4, 3),
      fulfilled: new Date(2020, 4, 3),
      status: 'Completed'
    },
    {
      id: 3, 
      customer:
        { 
          id: 3, 
          name: 'test', 
          state: 'CO', 
          email: 'test@test.ca' 
        },
      total: 230, 
      placed: new Date(2020, 4, 3),
      fulfilled: new Date(2020, 4, 3),
      status: 'Completed'
    },
  ];

  ngOnInit(): void {
  }

}
