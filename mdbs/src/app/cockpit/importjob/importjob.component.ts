import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.importJob = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required]
    });
  }
}
