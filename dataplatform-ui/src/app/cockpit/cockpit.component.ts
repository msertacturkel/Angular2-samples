import {
  Component,
  ViewChild
} from '@angular/core';
import {ConnectionComponent} from './connection/connection.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {

  @ViewChild(ConnectionComponent)
  private connectionComponent: ConnectionComponent;
  buttonClicked: boolean;


  typeImport = 'import';
  typeUpdate = 'update';
  typeRun = 'run';

  constructor() {}
  clicked() {
    this.connectionComponent.log();
    this.buttonClicked = true;
    console.log(this.buttonClicked);
  }
}
