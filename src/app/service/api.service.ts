import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly appKey =
    '5fd336b0bbc9b3725a006fd9d5a021162a275893ad69b9ed9896895ee77985e0';
  timestamp = Date.now();
  constructor(private http: HttpClient) {}

  send(url, body = null) {
    return this.http.post(`https://mock.biaoyansu.com/api/1/${url}`, body, {
      headers: new HttpHeaders({
        'BIAO-MOCK-APP-KEY': this.appKey,
        'BIAO-MOCK-TIMESTAMP': this.timestamp.toString(),
        'BIAO-MOCK-SIGNATURE': this.sign()
      })
    });
  }

  private sign() {
    return btoa(this.appKey + this.timestamp);
  }
}
