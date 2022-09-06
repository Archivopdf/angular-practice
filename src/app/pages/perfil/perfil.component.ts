import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public UsuarioPerfil: Usuario;
  public myclass: string;
  public isHidden: boolean;



  constructor() {
    this.UsuarioPerfil = new Usuario('Pedro', 'Perez', 'pedro77@correo.es', '../../assets(img/foto.jpg', 'contraseña', 0);
    this.myclass = "clase";
    this.isHidden = true;

  }

  ngOnInit(): void {
  }

  change(nombre: string, apellido: string, correo: string, url: string, password: string) {
    let modify: boolean = false;
    if (nombre) { this.UsuarioPerfil.nombre = nombre; modify = true };
    if (apellido) { this.UsuarioPerfil.apellido = apellido; modify = true };
    if (correo) { this.UsuarioPerfil.correo = correo; modify = true };
    if (url) { this.UsuarioPerfil.url = url; modify = true };
    if (password) { this.UsuarioPerfil.password = password; modify = true };
  }

  oculto() {
    if (this.isHidden == true) {
      this.isHidden = false
    } else if (this.isHidden == false) {
      this.isHidden = true
    }
  }
}
