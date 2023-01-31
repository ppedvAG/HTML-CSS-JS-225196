// Funktionen
// Syntax:
// function identifier (optional Parameter) { code_Block }
// Funktionen, die zu einem Objekt gehören nennen wir Methoden, z.B. console.log()
// Funktionen werden aufgerufen indem wir ihren Identifier schreiben und runde Klammern anhängen 
// und dabei wenn nötig Parameter übergeben
console.log("hallo Welt!"); // Funktionsaufruf mit Parameter
console.clear(); // Funktionsaufruf ohne Parameter
// Löscht den Verlauf der Konsole

// Erstellen einer einfachen Funktion ohne Rückgabe:
// Solche Funktionen geben in JS standardmäßig undefined zurück
function greeter()  
{
    console.log("Hallo Welt!");
}

greeter();

// Erstelle eine einfache Funktion mit Rückgabe:
function greetPerson(name)
{
    return "Hallo " + name;
}

// Funktionen können auch andere Funktionen als Parameter übergeben werden
console.log(greetPerson("Max Mustermann"));

function multiplier(numOne, numTwo)
{
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5, 25);
let ergebnis2 = multiplier(8, 98);
console.log(ergebnis1, ergebnis2);

// Variablen können auch eine Funktion als Wer erhalten
let testX = multiplier;
console.log(testX(12, 44));
// Hier wird der Identifier der Variable zum Alias der Funktion

// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren:
// && logisches und 1 < 2 && 1 < 3 => Nur true wenn beide bedingungen zutreffen
// || logische oder 1 < 4 || 1 < -10 => true sobald eine der Bedingungne wahr ist

// Übung: 
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false seine

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowhol durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den obigen REgeln in der Konsole ausgegeben werden


// Rekursive Funktionen
// Funktionen, die sich in ihrem Körper selbst aufrufen
// Müssen immer eine Bedingung enthalten, damit es keine endlos Schleife wird
// Können schnell inneffizient werden, da es viele Funktionsaufrufe sind

function faculty(limit) {
    if (limit < 2)
    {
        return 1;
    }
    else {
        return limit * faculty(limit -1);
    }
}

// Lambda-Funktionen:
// Alternativen zu den anonymen Funktionen
// Anonyme Funktionen sind ohne Identifier
// Weißt man im normalfall einer Variable zu, damit sie wiederverwendbar sind
// Einfache anonyme Funktion
let sum = function (numOne, numTwo) {return numOne + numTwo};
let ergebnis3 = sum(8,9)

// Sind identisch zu normalen Funktionen

// Lambdas sind die kompakte Alternative zu den anonymen Funktionen
// Pfeilfunktionen

let quadruple = (a) => a*4;
let square = (a) => a*a;

function vervierfachen (a)
{
    return a * 4;
}

function quadrieren (a) {
    return a * a;
}

// Lambdas werden meistens als Parameter für andere Funktionen benutzt
// wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a, b) => {
    a *=2;
    b *=2;
    return a * b;
}
// Wir brauchen dann wieder die geschweiften Klammern und das return Keyword