// Events in JS
// Entweder per Attribut
// Siehe HTML

// Best-Practice:
// node.addEventListener("typDesEvents", function, ?true)

// Wir brauchen:
// das Element, das auf das Event achten soll
// das Element das input erhalten soll

let username = document.querySelector("#username");
let output = document.querySelector("#output");

username.addEventListener("keyup", e => {
    console.log(e.target.value);
    output.innerText = e.target.value;
}

)

// change => wenn der Inhalt geändert werden soll
// click => wenn es angeklickt wird
// keyup/keydown beim loslassen/drücken der Taste
// blur => Verlassen des Elements
// focus => Betreten des Elements, also wenn es im fokus steht

// Bubbling zum Vorteil nutzen um weniger Code zu schreiben
let wrapper = document.querySelector("#wrapper");
document.body.addEventListener("click",e => {alert("Ich wurde geklickt body") }, true);
wrapper.addEventListener("click", e =>{alert("Ich wurde geklickt div") }, true);
wrapper.addEventListener("click", e => {
    alert(`Button ${e.target.value} wurde geklickt`);
})

// Drei Phasen:
// Capturing Event wird von oben(window) bis unten zum Ziel weitergegeben
// Target - Event ist beim Ziel angekommen
// Bubbling Phase - Event wird von unten(target) bis oben(window) weitergereicht und löst etwaige event listener aus

// Events können auch entfernt werden, allerdings nicht immer
// eventListener, die anonyme Funktionen enthalten können nicht entfernt werden, da die Funktion kein
// Identifier hat

function sayHi() {
    console.log("Hi");
};

document.querySelector("#d").addEventListener("click", sayHi);
document.querySelector("#d").removeEventListener("click", sayHi);
// Nun wird sayHi nichtmehr ausgeführt

// Syntax:
// node.removeEventListener("eventTyp", funktionsName);