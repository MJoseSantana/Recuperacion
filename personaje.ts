export interface IPersonaje {
  ObtenerNombre(): string;
}
// Definimos una interfaz IPersonaje que contiene el método ObtenerNombre().
// Esto nos permite asegurarnos de que todas las clases de personajes implementen este método.
export class Personaje implements IPersonaje {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  ObtenerNombre(): string {
    return this.nombre;
  }
}
// Implementamos la clase base Personaje que implementa la interfaz IPersonaje.
export class Goku extends Personaje {
  constructor() {
    super('Goku');
  }
}
export class Vegeta extends Personaje {
  constructor() {
    super('Vegeta');
  }
}
export class Goten extends Personaje {
  constructor() {
    super('Goten');
  }
}
export class Trunks extends Personaje {
  constructor() {
    super('Trunks');
  }
}
// Implementamos las clases de personajes individuales que heredan de la clase Personaje.
// Cada personaje tiene su propio nombre y utiliza el constructor de la clase base para inicializarlo.
// Estas clases representan a los personajes "Goku", "Vegeta", "Goten", "Trunks" y "Gohan".
// Al heredar de la clase Personaje, heredan su método ObtenerNombre() y lo implementan según su nombre específico.
// Por ejemplo, el método ObtenerNombre() en la clase "Goku" devolverá "Goku".
// Lo mismo se aplica a las demás clases de personajes.