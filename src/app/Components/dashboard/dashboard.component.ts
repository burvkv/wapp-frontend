import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveyData = [
    { name: 'Bikes', value: 105000 },
    { name: 'Cars', value: 55000 },
    { name: 'Trucks', value: 15000 },
    { name: 'Scooter', value: 150000 },
    { name: 'Bus', value: 20000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
