import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
