import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrimTextPipe } from './customPipe/trim-text-pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet,TrimTextPipe,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pipe');

  tittle=signal("Eastencher private limited")
}
