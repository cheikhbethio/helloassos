import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { HttpService } from './shared/services/http.service';
import { ListAssosComponent } from './list-assos/list-assos/list-assos.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewAssosComponent } from './view-assos/view-assos.component';


const angMat = [
  MatButtonModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    AppComponent,
    ListAssosComponent,
    ViewAssosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...angMat
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
