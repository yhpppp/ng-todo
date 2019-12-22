import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList = [];
  constructor(private apiService: ApiService) {}

  private removeLocal(id: number) {
    this.taskList = this.taskList.filter(item => {
      return item.id !== id;
    });
  }

  private updateLocal(body: { id: any; title: any }) {
    const index = this.taskList.findIndex(it => {
      return it.id === body.id;
    });
    this.taskList[index] = body;
  }

  create(body: Task) {
    this.apiService.send('task/create', body).subscribe((r: any) => {
      this.taskList.unshift(r.data);
    });
  }

  remove(id: number) {
    this.apiService.send('task/delete', { id }).subscribe((r: any) => {
      this.removeLocal(r.data.id);
    });
  }

  update(
    idd: number,
    body: { title?: string; completed?: boolean; id?: number }
  ) {
    body.id = idd;
    this.apiService.send('task/update', body).subscribe((r: any) => {
      console.log('r.data :) ', r.data);

      this.updateLocal(r.data);
    });
  }

  read() {
    this.apiService.send('task/read').subscribe((r: any) => {
      this.taskList = r.data;
    });
  }

  find(id: number) {
    return this.taskList.find(item => {
      return item.id === id;
    });
  }
}
