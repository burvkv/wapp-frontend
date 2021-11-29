import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})
export class HardwareComponent implements OnInit {
  hardwares = [
    {
      "name": "In Use",
      "value": 760
    },
    {
      "name": "Available",
      "value": 203
    },
    {
      "name": "Defected",
      "value": 123
    },
    {
      "name": "Destructed",
      "value": 27
    },
    {
      "name": "In Service",
      "value": 13
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
