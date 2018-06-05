import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConnectionModel} from '../../shared/connection.model';
import {ConnectionService} from '../../shared/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  connectionForm: FormGroup;
  @Input() typeImport: string;
  @Input() typeUpdate: string;
  @Input() typeRun: string;
  private connectionJobJobModel: ConnectionModel;

  constructor(private connectionService: ConnectionService, private fb: FormBuilder) {
    this.connectionForm = fb.group({
      jobNameCtl: ['', Validators.required],
      usernameCtl: ['', Validators.required],
      passwordCtl: ['', Validators.required],
      conStrCtl: ['', Validators.required],
      cronCtl: ['', Validators.required]
    });
  }
  log() {
    this.connectionJobJobModel = new ConnectionModel(
      this.connectionForm.get('jobNameCtl').value,
      this.connectionForm.get('usernameCtl').value,
      this.connectionForm.get('passwordCtl').value,
      this.connectionForm.get('conStrCtl').value,
      this.connectionForm.get('cronCtl').value);
    console.log('JobName: ' + this.connectionJobJobModel.jobName + '\n' ,
      'Username: ' + this.connectionJobJobModel.username + '\n' ,
      'Password: ' + this.connectionJobJobModel.password + '\n',
      'ConStr: ' + this.connectionJobJobModel.conStr + '\n',
      'Cron: ' + this.connectionJobJobModel.cron );
      this.getConnections();
      this.postConnection(this.connectionJobJobModel);
      /// this.getConnection(this.connectionJobJobModel.jobName);
  }
  public getConnections() {
    this.connectionService.getConnections();
  }
  public postConnection(connectionModel: ConnectionModel) {
    this.connectionService.postConnection(connectionModel);
  }
  public getConnection(jobName: string) {
    this.connectionService.getConnection(this.connectionJobJobModel.jobName);
  }
}
