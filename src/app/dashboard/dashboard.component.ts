import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   cardDetails = [
    {
      topbar : "Sales",
      icon : "fa fa-truck",
      num : "2.382",
      precent : "-3.65% ",
      bottombar : "Since last week",
      class : "text-danger"
    },
    {
      topbar : "Earnings",
      icon : "fa fa-dollar",
      num : "$21.300",
      precent : "6.65% ",
      bottombar : "Since last week",
      class : "text-success"
    },
    {
      topbar : "Visitors",
      icon : "fa fa-users",
      num : "14.212",
      precent : "5.25%",
      bottombar : "Since last week",
      class : "text-success"
    },

    {
      topbar : "Orders",
      icon : "fa fa-shopping-cart",
      num : "64",
      precent : "-2.25%",
      bottombar : "Since last week",
      class : "text-danger"
    }
   ]
}
