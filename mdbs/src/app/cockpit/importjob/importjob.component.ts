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
      a: ['', Validators.required],
      b: ['', [Validators.required, Validators.email]],
      c: ['', Validators.required]
    });
  }
  log() {
    this.importJobModel = new ImportjobModel(this.importJob.get('a').value,
      this.importJob.get('b').value, this.importJob.get('c').value, '', '');
    console.log(this.importJobModel.jobName);
  }
}
