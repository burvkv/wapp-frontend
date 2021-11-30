import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-date',
  templateUrl: './breadcrumb-date.component.html',
  styleUrls: ['./breadcrumb-date.component.css']
})
export class BreadcrumbDateComponent implements OnInit {
  
   cumbs:string[] =["asfsaf","fadsf","gdagad"];
  
  activeClass:string="breadcrumb-item active";
  passiveClass:string="breadcrumb-item";
  constructor() { }

  ngOnInit(): void {
  }
 
}
