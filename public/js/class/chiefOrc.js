class ChiefOrc extends Urukhai {
  constructor(name, age, strength) {
    super(name, age, strength);
  }

  screams() {
    console.info(`
        NOM : ${this.name},
        AGE : ${this.age},
        STRENGTH : ${this.strength}`);
  }

  bigBoss(words) {
    console.info(`${this.name} dit : ${words}`);
    console.Bigboss(`${this.name}  ${this.age} to the neck !`);
  }
}

export default Urukhai;
