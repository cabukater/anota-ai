import { TypeLabelPipe } from './type-label.pipe';

describe('TypeLabelPipe', () => {
  let pipe: TypeLabelPipe;

  beforeEach(() => {
    pipe = new TypeLabelPipe();
  });

  it('should transform "1" to "Paisagem"', () => {
    expect(pipe.transform("1")).toBe('Paisagem');
  });

  it('should transform "2" to "Flor"', () => {
    expect(pipe.transform("2")).toBe('Flor');
  });

  it('should transform "3" to "Pizza"', () => {
    expect(pipe.transform("3")).toBe('Pizza');
  });

  it('should transform an unknown value to "Desconhecido"', () => {
    expect(pipe.transform("5")).toBe('Desconhecido');
  });
});
