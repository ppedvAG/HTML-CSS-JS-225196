
// einzeiliger Kommentar

/*
    Mehrzeiliger
    Kommentar
*/

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

// Können Texte, variablen Zahlen usw direkt in der Konsole der dev-Tools des Browsers eingeben

// Dafür sprechen wir das console Objekt an
console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief"); // Wird als Fehler ausgegeben
console.info("Ich bin eine Information!"); // Wird im Firefox mit Info Zeichen dargestellt

// Variablen definieren:

// Modernen Varianten:
let firstName = "Max";
// Syntax:
// let identifier = Wert;
// Identifier muss mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive
let age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden

// Alternative zu let:
const lastName = "Mustermann";
// Funktioniert wie let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren
console.log("Hallo " + firstName + " " + lastName);

// Interpolierter String:
console.log(`Hallo ${firstName} ${lastName}`);

// Primitives in JavaScript
// Sind eigentlich reine Daten
// Sind von einem Wrapper Objekt umgeben, damit weiterhin alles ein Objekt ist in JS

// String Zeichenfolge
// Strings werden von "" oder von ''
console.log('Hallo Welt');
console.log("Hallo Welt");

// Wenn wir Anführungszeichen im String benutzen wollen:
console.log("Er sagt: 'Hallo Welt'");
console.log('Er sagt: "Hallo Welt"');

// Geht nicht:
// console.log("Er sagt: "Hallo Welt"");
// Wenn wir die selben Anführungszeichen wie zum definieren des Strings benutzen wollen:
console.log("Er sagt: \"Hallo Welt!\"")

// number
// Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximalen Wert: 1.7976.....e+308

// Arithmetische Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit dem Zuweisungsoperator kombiniert werden
// zahl = zahl * 4;
zahl *= 4;

// % Modulo Teilung mit Rest
console.log(254.6 * 13 % 4);

// ++ Inkrement
// -- Dekrement
// Wenn man das inkrement/dekrement vor die Zahl stellt, dann wird die Zahl vor der eigentlichen Operation erhöht bzw erniedrigt
// Wenn es danach steht wird erst die eigentliche Operation durchgeführt
auchZahl++;

// boolean
// true/false
let alleAnwesend = true;
let kursEnde = false;
// Wird meistens für Vergleiche und if-Blöcke benutzt

// null Ist die absichtlich Zuweisung keines Wertes
// Bedeutet die Abwesenheit von Daten
let nichts = null;

// undefined
// Variable definiert, aber nicht initialisiert
let test;

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// typeof(variable/wert)
console.log(typeof(firstName));
// erlaubt das prüfen von Datentypen

// Scope
// Unterschied zwischen let, const und var
let x;
var y;
const z = 5;
// 1. Unterschied: const muss sofort mit einem Wert gefüllt werden
// var und let können aber später gefüllt werden
x = 15;
y = 12;
// 2. Unterschied: var legt ein globales Objekt an
// let hingegen nicht
// 3. Unterschied: hoisting
// hoisting feht nur mit var
// Geht:
w = 15;
console.log(w);
var w;
// Wenn wir ganz ohne Keyword einer Variable einen Wert zuweisen wird sie als globale Eigenschaft des window Objekts erstellt
// SCHLECHTE FORM!
// Geht nicht
// ww = 15;
// console.log(ww);
// let ww;

// 4. Unterschied:
// var kennt den Blockscope nicht
// let schon

{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
}
//console.log(block1); // Hier scheitert der aufruf, da block1 nur innerhalb des Blockes von Zeile 137 bis 140 bekannt ist

console.log(block2); // Das funktioniert, da var den Blockscope nicht kennt

// Scopes in JavaScript:
// Globaler Scope => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion aufrufbar
// Block Scope => Variable ist nur in dem Block in dem sie definiert wurde aufrufbar

// Definiere zwei Variablen vom Type Number
// Führe eine beliebige Arithmetische Operation mit den beiden Variablen aus und weise das Ergebnis einer Konstanten zu
// Lass die Konstante ind er Konsole ausgeben
