import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectionModel} from './connection.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getConnections() {
    return this.httpClient.get<ConnectionModel>(`${this.API_URL}/connection/all/get`).subscribe(data => console.log(data));
  }

  postConnection(importJobModel: ConnectionModel) {
    this.httpClient.post(`${this.API_URL}/connection/post`, importJobModel).subscribe(data => console.log(data));
  }

  getConnection(jobName: string) {
    return this.httpClient.get(`${this.API_URL}/connection/get/${jobName}`).subscribe(data => console.log(data));
  }
}
