import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:any={
    Date:"12.11.2021",
    Process:"Kulaklık Değişimi",
    Explanation:"Furkan Arslan'a Sennheiser gönderildi. Jabra bekleniyor.",
    status:false,//bekliyor
    Person:"Burak Arslan"
  }
  todo2:any={
    Date:"13.11.2021",
    Process:"Klavye Değişimi",
    Explanation:"Buse Babacan'a Klavye gönderildi.",
    status:true,//bekliyor
    Person:"Hakan Ertem"
  }
  todo3:any={
    Date:"14.11.2021",
    Process:"Pc Değişimi",
    Explanation:"Sema Atik'e Casper gönderildi. Hp bekleniyor.",
    status:false,//bekliyor
    Person:"Hakan Ertem"
  }
  todo4:any={
    Date:"11.11.2021",
    Process:"Pc Değişimi",
    Explanation:"Eylem Yılmaz'a Avantron gönderildi. Hp bekleniyor.",
    status:true,//bekliyor
    Person:"Mehmet Limoncu"
  }

  todo5:any={
    Date:"12.11.2021",
    Process:"Kulaklık Değişimi",
    Explanation:"Furkan Arslan'a Sennheiser gönderildi. Jabra bekleniyor.",
    status:false,//bekliyor
    Person:"Burak Arslan"
  }
  todo6:any={
    Date:"13.11.2021",
    Process:"Klavye Değişimi",
    Explanation:"Buse Babacan'a Klavye gönderildi.",
    status:true,//bekliyor
    Person:"Hakan Ertem"
  }
  todo7:any={
    Date:"14.11.2021",
    Process:"Pc Değişimi",
    Explanation:"Sema Atik'e Casper gönderildi. Hp bekleniyor.",
    status:false,//bekliyor
    Person:"Hakan Ertem"
  }
  todo8:any={
    Date:"11.11.2021",
    Process:"Pc Değişimi",
    Explanation:"Eylem Yılmaz'a Avantron gönderildi. Hp bekleniyor.",
    status:true,//bekliyor
    Person:"Mehmet Limoncu"
  }

  todos:any[] =[
    this.todo,
    this.todo2,
    this.todo3,
    this.todo4,
    this.todo5,
    this.todo6,
    this.todo7,
    this.todo8,
    
  ];
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
