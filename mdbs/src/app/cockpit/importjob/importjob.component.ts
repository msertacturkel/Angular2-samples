import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Importjob} from '../../shared/importjob.model';
import {ImportjobService} from '../../shared/importjob.service';

@Component({
  selector: 'app-importjob',
  templateUrl: './importjob.component.html',
  styleUrls: ['./importjob.component.scss']
})
export class ImportjobComponent {
  importJobs: Importjob[];

  importJob: FormGroup;
  @Input() typeImport: string;
  @Input() typeUpdate: string;
  @Input() typeRun: string;
  private importJobModel: Importjob;
  constructor(private importJobservice: ImportjobService, private fb: FormBuilder) {
    this.importJob = fb.group({
      jobNameCtl: ['', Validators.required],
      usernameCtl: ['', Validators.required],
      passwordCtl: ['', Validators.required],
      conStrCtl: ['', Validators.required],
      cronCtl: ['', Validators.required]
    });
  }
  log() {
    this.importJobModel = new Importjob(
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
      this.getImportJobs();
      this.postImportJob(this.importJobModel);
      /// this.getImportJob(this.importJobModel.jobName);
  }
  public getImportJobs() {
    this.importJobservice.getImportJobs();
  }
  public postImportJob(importJobModel: Importjob) {
    this.importJobservice.postImportJob(importJobModel);
  }
  public getImportJob(jobName: string) {
    this.importJobservice.getImportJob(this.importJobModel.jobName);
  }
}
