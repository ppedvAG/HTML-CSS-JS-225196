// Video & Leiste
const video = document.querySelector("video");
const controls = document.querySelector(".controls");

// Einzelne Buttons
const play = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const rewind = document.querySelector(".rwd");
const fastForward = document.querySelector(".fwd");


// Für den Zeitbalken:
const timerSect = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer section");

// Wird per JS entfernt, damit User, die kein JS erlauben/unterstützen trotzdem das Video abspielen können
video.removeAttribute("controls");
controls.style.visibility = "visible";

function playVideo() {
    if(video.paused){
        video.play();
        // mit der property dataset können wir auf die data-* Attribute des HTML-Elementes zugreifen
        play.dataset.icon = "u";
    }
    else{
        // mit der property dataset können wir auf die data-* Attribute des HTML-Elementes zugreifen
        video.pause();
        play.dataset.icon = "P"
    }
}

play.addEventListener("click", playVideo);


function stopVideo()
{
    // media wird pausiert
    video.pause();
    video.currentTime = 0;
    play.dataset.icon = "P";
}

stopBtn.addEventListener("click", stopVideo);
video.addEventListener("ended", stopVideo);

function videoFwd() {
    // springt um 10 Sekunden vorwärts
    video.currentTime += 10;
}

function videoRwd() {
    video.currentTime -= 10;
}

fastForward.addEventListener("click", videoFwd);
rewind.addEventListener("click", videoRwd);

function setTime() {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime - minutes * 60);

    // padStart("Maximale Länge des Strings", "Füllzeichen") Füllt am Anfang auf
    // padEnd("Maximale Länge des Strings", "Füllzeichen") Füllt am End auf
    const minutesString = minutes.toString().padStart("2", "0");
    const secondsString = seconds.toString().padStart("2", "0");

    timer.innerText = `${minutesString}:${secondsString}`;

    const bar = timerSect.clientWidth * (video.currentTime/video.duration);
    timerBar.style.width = `${bar}px`;
}


video.addEventListener("timeupdate", setTime);