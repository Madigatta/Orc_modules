// hérite de la class Creature donc import de la class en question
import Creature from "./Creature.js";

/***************************
 * Classe "Orque"
 ****************************/

class Orc extends Creature {
  constructor(name, age, strength) {
    super(name, age, strength);
  }

  scream(words) {
    console.info(`${this.name} screams :  ${words.toUpperCase()} !!!`);
  }

  bite(someone) {
    if (!(someone instanceof Creature)) {
      throw new Error("`someone` is not a Creature");
    }

    console.info(`${this.name} bites ${someone.name} to the neck !`);
  }
}

export default Orc;
