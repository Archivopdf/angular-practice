import { libro } from './libro';

describe('Libro', () => {
  it('should create an instance', () => {
    expect(new libro(0, 0, "tres maravillas", "aventura", "maria perez", 20, "")).toBeTruthy();
  });
});
