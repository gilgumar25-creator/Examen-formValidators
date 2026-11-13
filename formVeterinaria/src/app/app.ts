import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormVeterinariaComponent} from './components/form-veterinaria-component/form-veterinaria-component';

@Component({
  imports: [RouterOutlet,FormVeterinariaComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('formVeterinaria');
}
