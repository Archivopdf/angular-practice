export class Usuario {

    public Id_usuario: number;
    public nombre: string;
    public apellido: string;
    public correo: string;
    public url: string;
    public password: string;

    constructor(nombre: string, apellido: string, correo: string, url: string, password: string, Id_usuario: number = 0) {

        this.Id_usuario = Id_usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.url = url;
        this.password = password;
    }
}

