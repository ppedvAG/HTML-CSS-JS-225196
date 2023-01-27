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