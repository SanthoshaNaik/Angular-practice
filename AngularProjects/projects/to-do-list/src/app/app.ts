import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


  tasks = signal([
    { id: 0, title: "Team Meating", completed: false }
  ])

  title = signal('')

  AddTask() {
    if (this.title()) {
      this.tasks.update((item) => ([
        ...item, { id: this.tasks().length, title: this.title(), completed: false }
      ]))

      this.title.set('')
    }

  }

  Delete(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id))
  }

}
