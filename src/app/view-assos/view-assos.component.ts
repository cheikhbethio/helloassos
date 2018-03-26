import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/services/http.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-view-assos',
  templateUrl: './view-assos.component.html',
  styleUrls: ['./view-assos.component.scss']
})
export class ViewAssosComponent implements OnInit {
  dataSource;
  assoName;
  nbPayment;
  pageEvent: PageEvent;
  defaultPageSize: number = 5;
  pageSize;
  totalPayement;

  displayedColumns = ['id', 'date', 'amount', 'payer_first_name'];
  constructor(private act: ActivatedRoute,
    private mockerService: HttpService
  ) { }

  ngOnInit() {
    this.act.params.subscribe(params => {
      this.nbPayment = this.mockerService.getNbTotalPay(params.id);
      this.assoName = this.mockerService.getAsso(params.id)
      this.dataSource = this.mockerService.getPaymentsAsso(params.id, 1, this.defaultPageSize);
      this.totalPayement = this.getTotalPayment();
    });
  }

  changePage($event) {
    this.dataSource = this.mockerService.getPaymentsAsso(this.assoName.id,  $event.pageIndex + 1, $event.pageSize);
  }
  getTotalPayment() {
    return this.dataSource.reduce((memo, value) => {
      memo += value.amount;
      return memo;
    }, 0)
  }

}
