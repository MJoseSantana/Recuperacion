import { IPersonaje } from './personaje';

// Creamos una clase abstracta para representar el Decorador
export abstract class FusionDecorador implements IPersonaje {
  // El Decorador contiene una referencia al personaje original
  protected personaje: IPersonaje;

  constructor(personaje: IPersonaje) {
    this.personaje = personaje;
  }

  abstract ObtenerNombre(): string;
}
// Implementamos la clase abstracta Fusion que también implementa la interfaz IPersonaje.
// Esta clase representa una fusión de personajes y tiene dos atributos protegidos, personaje1 y personaje2,
// que almacenan los personajes que se fusionan.
// Al ser una clase abstracta, no implementa directamente el método ObtenerNombre(),
// dejando que las subclases de fusión lo hagan.
// Implementamos las fusiones concretas como subclases del Decorador
export class Gogeta extends FusionDecorador {
  ObtenerNombre(): string {
    // Agregamos la información adicional a la fusión original
    return `${this.personaje.ObtenerNombre()} + Vegeta = Gogeta`;
  }
}
export class Gotenks extends FusionDecorador {
  ObtenerNombre(): string {
    return `${this.personaje.ObtenerNombre()} + Trunks = Gotenks`;
  }
}
