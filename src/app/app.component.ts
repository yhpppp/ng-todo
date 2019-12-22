import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.send('task/read', { title: 'title1' }).subscribe(data => {
      console.log('data :) ', data);
    });
  }

  title = 'ng-todo';
}
