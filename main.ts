import { Goku, Vegeta, Goten, Trunks} from './personaje';
import { Gogeta, Gotenks} from './fusion';

function Main() {
  const goku = new Goku();
  const vegeta = new Vegeta();
  const goten = new Goten();
  const trunks = new Trunks();

  // Aplicamos el patrón Decorador en las fusiones
  const gogeta = new Gogeta(goku);
  const gotenks = new Gotenks(goten);

  console.log(gogeta.ObtenerNombre()); // Goku + Vegeta = Gogeta
  console.log(gotenks.ObtenerNombre()); // Goten + Trunks = Gotenks
}

Main();
// main.ts
// En la función Main, creamos instancias de los personajes y las fusiones y mostramos los nombres de las fusiones
// invocando el método ObtenerNombre() en cada instancia de fusión.
// Gracias a la herencia y el polimorfismo, el método ObtenerNombre() de cada clase de fusión concreta
// se ejecutará adecuadamente y mostrará el nombre correcto de la fusión.
// Por ejemplo, la instancia de "Gogeta" mostrará "Goku + Vegeta = Gogeta".