// Vordefinierte Objekte
// string
// arrays
// Math
// Date

// strings
// Ist an sich eine Sonderform des Arrays
// ISt eine aneinanderreihung(array) von Buchstaben/Zeichen

let testString = "Ich bin ein Teststring";

// Eigenschaften/Properties:
testString.length; // => Die Anzahl der Zeichen die im String enthalten sind
console.log(testString.length);

// Wie spreche ich einzelne Buchstaben eines Strings an?
// Wir können dafür die s.g. Bracket-Notation benutzen
// testString[index]
// Gibt uns den Buchstaben an der entsprechenden Stelle des Strings zurück
testString[0]; // => I
// letzte Stelle des Strings:
testString[testString.length -1 ];
testString[21]; // => g
// String Indizes fangen bei 0 an zu zählen und enden bei length -1

// Methoden des Stringobjektes
// identifier.toUpperCase()
// identifier.toLowerCase()
// Gibt den String komplett groß oder klein-geschrieben zurück
// Verändert den bestehenden String nicht

// identifier.slice(startpunkt, ?ende?);
// Es wird ein neuer String zurückgegeben der bei index Startpunkt beginnt und 1 Stelle vor Ende endet
// Wenn ende nicht übergeben wird, wird der String vom Startpunkt bis zum ende des Strings zurückgegeben
// Wenn weder start noch ende definiert werden, wird der String komplett zurückgegeben
let part1String = testString.slice(0, 12);
// part1String besteht aus den Zeichen von testString[0] bis testString[11];
let part2String = testString.slice(12);
// part2String besteht aus den Zeichen von testString[12] geht bis zum ende des testStrings;
let part3String = testString.slice();
// Enthält den kompletten Inhalt von testString

// identifier.split
// Trennt den String in ein Array, wobei jeweils beim Seperator getrennt wird und der Seperator selbst ist nicht im Array enthalten
// Wenn kein seperator übergeben wird, wird der gesamte String als ein Array Element zurückgegeben
// Verändert den originalen String nicht
let stringArr = testString.split(" ");
console.log(stringArr);
stringArr = testString.split("i");
console.log(stringArr);

// identifier.charCodeAt
// Gibt uns den Unicode-Wert des Buchstabens an Indexstelle index zurück
let unicodeC = testString.charCodeAt(1);
console.log(unicodeC);

// identifier.charAt(index)
// Gibt uns den Buchstaben an der Stellt zurück

// idenifier.IndexOf(Suchbegriff, Startposition)
// identifier.lastIndexOf(Suchbegriff, Startposition)

// Wir wollen eine Funktion schreiben, die einen String als Parameter erhält und uns
// in der Konsole ausgibt wie viele klein und Großbuchstaben in diesem String enthalten sind
// Bsp: "Ich" => "Groß: 1 | Klein: 2"

// Array 
// Sammlung von mehreren Werten innerhlab einer Variable
// Können mit dem array literal oder mit dem Constructor arbeiten
// Können verschiedene Datentypen halten

// array literal
let literalArr = [1, 2, 3, "Werte", true, [1, 5, 10]];

// Constructor
let constructedArr = new Array(1, 2, 3, 4, 5, 6);

// Ansprechen von einzelnen Elementen
// => [1, 5, 10]
console.log(literalArr[5]);
// => array => index => zweidimensionalesArr => 10
console.log(literalArr[5][2]);
// => 6
console.log(constructedArr[5]);
 
// Auch das Array verfügt über ein prop
console.log(literalArr.length) // => 6
console.log(literalArr[5].length); // => 3

// Können Werte eines Arrays neuzuweisen
literalArr[0] = 40;
literalArr[0] = "Hallo";
console.log(literalArr);

// Methoden des Array Objekts
// Zusammenfügen von Arrays
// arrayIdentifier.concat(arr2, arr3, ..);

let concatArr = literalArr.concat(constructedArr, literalArr[5]);
console.log(concatArr);
console.log(concatArr.length);

// arr.indexOf
// arr.lastIndexOf
// Nicht geeignet für Objekte

let objectArr = [{"name": "Test", "age": 20}, {"name": "Test", "age": 15}];
let testObj = {"name": "Test", "age": 20}; // => 
console.log(objectArr.indexOf({ "name": "Test", "age": 20})); // -1
console.log(objectArr.findIndex(object =>
    {
        return object.name === "Test" && object.age === 15;
    }))

// Für Objekte:
// arr.findIndex(function)
// Am einfachsten mit lambdas
// Iteriert über jdes Element im Array

// arr.join(seperator)
// Gibt uns einen neuen String zurück der aus den Array Elementen getrennt vom Seperator besteht
// Falls wir keinen Seperator übergeben wird ein , benutzt
console.log(concatArr.join(" "));

// arr.reverse()
// Dreht die Reihenfolge des Arrays um
// !!!Verändert das bestehende Array
literalArr.reverse();
console.log(literalArr);

// arr.sort(?function?)
// Sortiert das Array anhand der Funktion
// Wird erst alles in strings umwandeln und dann dementsprechen alphabetisch sortieren
let numberArray = [1, 900, 1000, 999];
numberArray.sort();
console.log(numberArray); // => 1, 1000, 900, 999

numberArray.sort(
    (a, b) => b - a // a - b würde aufsteigend sortieren
)
// => sortiert absteigend
console.log(numberArray);

// Übung:
// Erstelle eine Funktion, die ein beliebig langes Array aus Zahlen erhalten kann und uns dann
// nur die hächste Zahl aus dem Array zurückgibt

// Erstelle eine Funktion, die ein zwei Dimensionales Array als Parameter erhält
// Die enthaltenen Arrays bestehen wieder nur aus Zahlen
// Die Funktion soll am Ende in der Konsole ausgeben das wie vielte Arrays das längste ist und
// welche Zahl die höchste ist