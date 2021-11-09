// import de nos class
import Creature from "./class/Creature.js";
import Orc from "./class/Orc.js";
import Urukhai from "./class/Urukhai.js";
//

// instanciation de nos class
let myCreature = new Creature("Kreattur", 45, 10);
let myOrc = new Orc("Orka", 15, 100);
let myUrukhai = new Urukhai("Urukhai", 30, 202);

// resultat attendu :

/********************/

//  NOM : creature
//  AGE : 45
//  STRENGTH : 10
myCreature.identity();

// "creature dit : Salut"
myCreature.saySomething("Salut");

/********************/

/********************/
// "Orc screams : HEYHO! !!!"
myOrc.scream("heyho!");
// "Orc bites creature to the neck !"
myOrc.bite(myCreature);
/********************/

// "Urukhai screams : I'M GONNA KILL YOU ! !!!"
myUrukhai.scream("I'M GONNA KILL YOU ! !!!");
// "Urukhai kills creature savagely !!!!!"

// true

// "BigBoss screams : HEY YOU, URUCK! MESSAGE !!!"
myUrukhai.bigBoss("HEY YOU, URUCK! MESSAGE !!!");
myUrukhai.Bigboss();
// NOM : BigBoss
// AGE : 30
// STRENGTH : 202
// ... and i am THE CHIEF, BITCHES!
//  NOM : creature
//  AGE : 45
//  STRENGTH : 10

// "creature dit : Salut"

// "Orc screams : HEYHO! !!!"
// "Orc bites creature to the neck !"

// "Urukhai screams : I'M GONNA KILL YOU ! !!!"

// "Urukhai kills creature savagely !!!!!"

// true

// "BigBoss screams : HEY YOU, URUCK! MESSAGE !!!"

// NOM : BigBoss
// AGE : 30
// STRENGTH : 202
// ... and i am THE CHIEF, BITCHES!
