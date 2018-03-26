import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-list-assos',
  templateUrl: './list-assos.component.html',
  styleUrls: ['./list-assos.component.scss']
})
export class ListAssosComponent implements OnInit {
  title = 'app';
  displayedColumns = ['profile','id', 'name', 'type', 'funding', 'pay'];
  dataSource;
  constructor(private mockerService: HttpService) {
  }
  ngOnInit() {
    this.dataSource = this.mockerService.getAssosList();
    console.log('++++++', this.dataSource)
  }

}
