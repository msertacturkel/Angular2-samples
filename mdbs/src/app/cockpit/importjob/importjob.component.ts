import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImportjobModel} from './importjob.model';

@Component({
  selector: 'app-importjob',
  templateUrl: './importjob.component.html',
  styleUrls: ['./importjob.component.scss']
})
export class ImportjobComponent {
  importJob: FormGroup;
  @Input() typeImport: string;
  @Input() typeUpdate: string;
  @Input() typeRun: string;
  private importJobModel: ImportjobModel;
  constructor(private fb: FormBuilder) {
    this.importJob = fb.group({
      jobNameCtl: ['', Validators.required],
      usernameCtl: ['', Validators.required],
      passwordCtl: ['', Validators.required],
      conStrCtl: ['', Validators.required],
      cronCtl: ['', Validators.required]
    });
  }
  log() {
    this.importJobModel = new ImportjobModel(
      this.importJob.get('jobNameCtl').value,
      this.importJob.get('usernameCtl').value,
      this.importJob.get('passwordCtl').value,
      this.importJob.get('conStrCtl').value,
      this.importJob.get('cronCtl').value);
    console.log('JobName: ' + this.importJobModel.jobName + '\n' ,
      'Username: ' + this.importJobModel.username + '\n' ,
      'Password: ' + this.importJobModel.password + '\n',
      'ConStr: ' + this.importJobModel.conStr + '\n',
      'Cron: ' + this.importJobModel.cron );
  }
}
