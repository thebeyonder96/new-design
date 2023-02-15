import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  folder = [
    {
      name: 'Inventory Ops',
      count: 3,
    },
    {
      name: 'Master Inventories',
      count: 1,
    },
    {
      name: 'Supply Chains',
      count: 2,
    },
  ];
}
