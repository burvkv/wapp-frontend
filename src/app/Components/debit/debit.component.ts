import { Component, OnInit } from '@angular/core';
import { DebitForGetDto } from 'src/app/models/dto/debitForGetDto';
import { ActivatedRoute } from '@angular/router';
import { DebitService } from 'src/app/services/debit.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
  debits: DebitForGetDto[] = [];
  dataLoaded = false;
  constructor( private activatedRoute:ActivatedRoute, private debitService:DebitService) { }

  ngOnInit(): void {
    this.getDebits();
  }

  getDebits() {
    this.debitService.getDebits().subscribe(response=>{
      this.debits = response.data;
      this.dataLoaded = true;
    })
  }
}
