// Classes in JS

class Person {
    // Mit hashtag definiere ich ein privates Feld
    // Kann nur noch durch klassen-Methoden aufgerufen werden und nicht direkt
    #age;

    constructor (firstName, lastName, age, gender)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // setter
    set age(newAge) {
        console.log("setter wurde grade aufgerufen");
        if(newAge < this.age)
        {
            console.error("man kann nicht jünger werden!");
        }
        else {
            this.#age = newAge;
        }
    }

    // getter
    get age() {
        console.log("getter wurde grade aufgerufen");
        return this.#age;
    }

    // Private Methoden
    #introduce() {
        return `Hi my name is ${this.firstName} ${this.lastName}`;
    }

    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce();
    }
}

const p1 = new Person("Max", "Mustermann", 29, "male");

p1.introduceSelf();

// extends
class Student extends Person {
    constructor(firstName, lastName, age, gender, schooClass) {
        super(firstName, lastName, age, gender);
        this.schooClass = schooClass;
    }

    showGrade() {
        return console.log(Math.floor(Math.random() *6) + 1);
    }

    introduceSelf() {
        console.log(`My name is ${this.firstName} and im in class ${this.schooClass}`);
    }
}

const p2 = new Student ("Erika", "Musterfrau", 17, "female", 11);
p2.introduceSelf();
p2.showGrade();

// Übung
// Erstelle eine Klasse Teacher, die von Person abgeleitet wird und zusätzlich ein private field mit subject hat
// Die Methode introduceSelf() soll erweitert oder überschrieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen
// Eine Methode editGrade() um eine Note abzuändern
