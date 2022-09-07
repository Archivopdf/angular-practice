import { Component, OnInit } from '@angular/core';
import { libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: libro[]

  constructor() {

    this.libros = []


    this.libros.push(new libro("la luna", "fantasia", "pedro", 20, "esto es una foto"));
    this.libros.push(new libro("aventuras en el hielo", "accion", "maria", 25, "esto es otra imagen"));
  }

  ngOnInit(): void {
  }


  addBook(titulo: string, tipoLibro: string, autor: string, precio: number, photo: string) {
    let newBook = new libro(titulo, tipoLibro, autor, precio, photo);
    this.libros.push(newBook)
  }
}
