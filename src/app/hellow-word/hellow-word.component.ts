import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellow-word',
  templateUrl: './hellow-word.component.html',
  styleUrls: ['./hellow-word.component.css']
})
export class HellowWordComponent implements OnInit {

  title = "Bienvenido a: ";
  subtitulo= "Pagina de Gina";
  constructor() { }

  ngOnInit() {
  }

}
