import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CockpitComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
