import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Importjob} from './importjob.model';

@Injectable({
  providedIn: 'root'
})
export class ImportjobService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getImportJobs() {
    return this.httpClient.get<Importjob>(`${this.API_URL}/importjob/all/get`).subscribe(data => console.log(data));
  }

  postImportJob(importJobModel: Importjob) {
    this.httpClient.post(`${this.API_URL}/importjob/post`, importJobModel).subscribe(data => console.log(data));
  }

  getImportJob(jobName: string) {
    return this.httpClient.get(`${this.API_URL}/importjob/get/${jobName}`).subscribe(data => console.log(data));
  }
}
