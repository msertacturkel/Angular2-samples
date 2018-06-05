import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ConnectionComponent } from './cockpit/connection/connection.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './cockpit/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
    ConnectionComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
