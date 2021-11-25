window.addEventListener("load", function () {
    var noteA = new Audio('assets/A.mp3');
    var noteC = new Audio('assets/C.mp3');
    var noteF = new Audio('assets/F.mp3');
    var noteG = new Audio('assets/G.mp3');
    var hiHat = new Audio('assets/hihat.mp3');
    var kick = new Audio('assets/kick.mp3');
    var laughOne = new Audio('assets/laugh-1.mp3');
    var laughTwo = new Audio('assets/laugh-2.mp3');
    var snare = new Audio('assets/snare.mp3');
    var beat = [kick, snare, hiHat];
    /*Funktion für das Drum Pad*/
    function playSound(sound) {
        sound.play();
    }
    /*Entspannter Beat mit Offbeat-HiHat*/
    function playBeat() {
        setInterval(function () {
            beat[2].play();
        }, 500);
        setInterval(function () {
            beat[0].play();
        }, 1000);
        setInterval(function () {
            beat[1].play();
        }, 2000);
    }
    /*Bonusaufgabe*/
    document.addEventListener('keydown', function (event) {
        if (event.key == "9") {
            playSound(hiHat);
        }
        else if (event.key == "8") {
            playSound(snare);
        }
        else if (event.key == "7") {
            playSound(kick);
        }
        else if (event.key == "6") {
            playSound(noteF);
        }
        else if (event.key == "5") {
            playSound(noteC);
        }
        else if (event.key == "4") {
            playSound(noteA);
        }
        else if (event.key == "3") {
            playSound(laughTwo);
        }
        else if (event.key == "2") {
            playSound(laughOne);
        }
        else if (event.key == "1") {
            playSound(noteG);
        }
        else if (event.key == "0") {
            playBeat();
        }
    });
    document.querySelector("#aButton").addEventListener('click', function () { playSound(noteA); });
    document.querySelector("#cButton").addEventListener('click', function () { playSound(noteC); });
    document.querySelector("#fButton").addEventListener('click', function () { playSound(noteF); });
    document.querySelector("#gButton").addEventListener('click', function () { playSound(noteG); });
    document.querySelector("#hiHatButton").addEventListener('click', function () { playSound(hiHat); });
    document.querySelector("#kickButton").addEventListener('click', function () { playSound(kick); });
    document.querySelector("#laughButtonOne").addEventListener('click', function () { playSound(laughOne); });
    document.querySelector("#laughButtonTwo").addEventListener('click', function () { playSound(laughTwo); });
    document.querySelector("#snareButton").addEventListener('click', function () { playSound(snare); });
    document.querySelector(".play").addEventListener('click', playBeat);
});
//# sourceMappingURL=script.js.map