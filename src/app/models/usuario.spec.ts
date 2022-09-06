import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario('Pedro', 'Perez', 'pedro77@correo.es', '../../assets(img/foto.jpg', 'contraseña', 0)).toBeTruthy();
  });
});
