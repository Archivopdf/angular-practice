import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuarioPerfil: Usuario;


  constructor() {
    this.usuarioPerfil = new Usuario('Pedro', 'Perez', 'pedro77@correo.es', '../../assets(img/foto.jpg', 'contraseña', 0);
  }

  ngOnInit(): void {
  }

  change(nombre: string, apellido: string, correo: string, url: string, password: string) {
    let modify: boolean = false;
    if (nombre) { this.usuarioPerfil.nombre = nombre; modify = true };
    if (apellido) { this.usuarioPerfil.apellido = apellido; modify = true };
    if (correo) { this.usuarioPerfil.correo = correo; modify = true };
    if (url) { this.usuarioPerfil.url = url; modify = true };
    if (password) { this.usuarioPerfil.password = password; modify = true };
  }

}
