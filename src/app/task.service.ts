import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { TASKS } from './models/mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
  constructor() { }
}
