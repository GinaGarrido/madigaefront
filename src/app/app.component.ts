import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Gina Garrido';
  age: number;
  adress: {
    street: string;
    city: string;
  };
  hobbies: string[];
  constructor() {
    this.age = 26;
    this.adress = {
      street: '2218 Baker Street',
      city: 'london'
    };
    this.hobbies = ['leer', 'escribir'];
  }
}
