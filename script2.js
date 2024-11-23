function addSound() {
    var soundElem = document.createElement("audio");

    var btnPlay = document.getElementById("btnPlay");

    var btnPause = document.getElementById("btnPause");

    soundElem.setAttribute("id", "audioSound");

    soundElem.setAttribute("src","camera.wav");

    document.body.appendChild(soundElem);

    btnPlay.hidden = false;
    btnPause.hidden = false;
    
}

function playSound() {
    var audio = document.getElementById("audioSound");

    audio.play();

    console.log("sound playing");
}

function pauseSound() {
    var audio = document.getElementById("audioSound");

    audio.pause();

    console.log("sound paused");
}
