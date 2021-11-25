import { Component, OnInit } from '@angular/core';
import { DebitForGetDto } from 'src/app/models/dto/debitForGetDto';
import { DebitService } from 'src/app/services/debit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  debits: DebitForGetDto[] = [];
  dataLoaded = false;
  constructor(private debitService:DebitService , private activatedRoute:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(this.getDebits)
  }
  getDebits() {
    this.debitService.getDebits().subscribe(response=>{
      this.debits = response.data
      this.dataLoaded = true;
    })   
  }
}
