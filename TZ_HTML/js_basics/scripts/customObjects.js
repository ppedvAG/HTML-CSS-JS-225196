// dynamische Props sind Props, die wir nach der Erstellung des Objektes hinzufügen
constructedObject.name = "Test Testmann";
constructedObject.age = 45;
constructedObject.employed = false;
constructedObject["cityOfOrigin"] = "Berlin";
// Wir weisen einfach einem Prop einen Wert zu
// Falls das prop noch nicht exisitiert wird es neuerstellt
// Falls es bereits existiert wird es überschrieben

// Wie erstelle ich einen Objekt-Constructor?
// Constructor sind fast normale funktionen
// Die Besonderheiten: this und kein return

// Einschub Methoden anfügen
function introduce() {
    console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}

// Person-Constructor:
// Constructor werden normalerweise mit großbuchstaben benannt
function Person(nameProp, age, employed, cityOfOrigin) {
    this.name = nameProp;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    this.introduceSelf = introduce;
};

// Wie rufe ich diesen Constructor auf?
// Bei Constructors brauchen wir das new Keyword

const person1 = new Person("Christian Lindner", 49, true, "Cologne");
const person2 = new Person("Luke Skywalker", 24, false, "Tattooin");
// Ohne das new-Keyword wird undefined zurückgegeben, da wir keinen return haben
// d.h. damit der Construcotr wie gewollt funktioniert benötigen wir das new-Keyword

console.log(person1.name);
console.log(person2.cityOfOrigin);

// Wie füge ich bei Constructor-Funktionen Methoden hinzu?
// SIehe Zeile 70

// Moderne Variante des Konstruktors:
// Ist syntactic Sugar, d.h. es ist eine rein sytnaktische Verbesserung mit keiner Änderung an der Funktionalität

// Mit dem Keyword class:

class PersonAlt {
    xyz = 124;
    constructor (nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }
    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }
}

const person3 = new PersonAlt("Christian Lindner", 49, true, "Cologne");


// Erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:
// Marke
// Modell
// MotorStatus (boolean)
// derzeitigeGeschw
// maximalGeschw

// derzeitige Geschwindigkeit soll bei der erstellung immer 0 sein
// motorStatus soll bei der Erstellung immer false sein

// Methoden:
// anAbschalten
// Die Methode soll nur den motorStatus ändern
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschW setzen,
// außer wenn diese die maximale Geschwindigkeit überschreiten würde