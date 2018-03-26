import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  displayedColumns = ['profile','id', 'name', 'type', 'funding', 'donate-form'];
  dataSource;
  constructor(private mockerService: HttpService) {
  }
  ngOnInit() {
    this.dataSource = this.mockerService.getAssosList();
    console.log('++++++', this.dataSource)
  }
}
