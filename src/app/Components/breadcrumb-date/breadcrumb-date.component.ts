import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-date',
  templateUrl: './breadcrumb-date.component.html',
  styleUrls: ['./breadcrumb-date.component.css']
})
export class BreadcrumbDateComponent implements OnInit {
  
   @Input() cumbs:string[] =["asfsaf","fadsf","gdagad"];
  

  constructor() { }

  ngOnInit(): void {
  }
 
}
