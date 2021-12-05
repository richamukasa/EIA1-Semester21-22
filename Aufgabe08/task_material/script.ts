// tslint:disable-next-line: typedef
window.addEventListener("load", function() {

    var sampleStock: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    var beat: string[] = [sampleStock[0], sampleStock[0], sampleStock[1], sampleStock[2], sampleStock[0], sampleStock[1]];
    var playing: boolean = false;
    var recording: boolean = false;

    //Funktion für das Drum Pad
    function play(sample: string): void {
        stopRecording();
        var sound: HTMLAudioElement = new Audio(sample);
        sound.play();
        if (recording) {
            beat.push(sample);
        } 
    }

    //Generiert einen Shuffle Beat aus Kick, Snare und HH mit 6 Schlägen (3/4 Takt)
    function shuffle(): void {
        clearBeat();
        for (let i: number = 0; i < 6; i++) {
            beat.push(sampleStock[Math.floor((Math.random() * 3))]);
        }
    }

    /*Leert den Beat*/
    function clearBeat(): void {
        beat = [];
    }

    //Spielt den im Array gespeicherten Beat im Loop (Spiel den selben Song nochmal!)
    function playBeat(): void {
        playing = true;
        var index: number = 0;
        // tslint:disable-next-line: no-any
        var loop: any = setInterval(playPreset, 300);
        function playPreset(): void {
            if (!playing) {
                clearInterval(loop);
            } else if (index >= beat.length) {
                index = 0;
                play(beat[index]);
            } else {
                play(beat[index]);
            }
            index++;
        }
        document.getElementById("playPauseButton").setAttribute("class", "fas fa-stop-circle");
        document.getElementById("playPauseButton").setAttribute("style", "color: #f35bc8");
    }

    //Stoppt den Beat
    function stopBeat(): void {
        playing = false;
        document.getElementById("playPauseButton").setAttribute("class", "fas fa-play-circle");
        document.getElementById("playPauseButton").setAttribute("style", "color: #adff2f");
    }

    //Startet die Aufnahme im geleerten Array
    function startRecording(): void {
        stopBeat();
        clearBeat();
        recording = true;
        document.getElementById("recordButton").setAttribute("style", "color: #f00");
    }

    //Stoppt die Aufnahme
    function stopRecording(): void {
        recording = false;
        document.getElementById("recordButton").setAttribute("style", "color: #c00");
    }


    // tslint:disable-next-line: typedef
    document.addEventListener("keydown", function(event) {
        if (event.key == "9") {
            play(sampleStock[2]);
        } else if (event.key == "8") {
            play(sampleStock[1]);
        } else if (event.key == "7") {
            play(sampleStock[0]);
        } else if (event.key == "6") {
            play(sampleStock[5]);
        } else if (event.key == "5") {
            play(sampleStock[4]);
        } else if (event.key == "4") {
            play(sampleStock[3]);
        } else if (event.key == "3") {
            play(sampleStock[8]);
        } else if (event.key == "2") {
            play(sampleStock[7]);
        } else if (event.key == "1") {
            play(sampleStock[6]);
        } else if (event.key == "0" && !playing) {
            playBeat();
        } else if (event.key == "0" && playing) {
            stopBeat();
        } else if (event.key == "Enter" && !recording) {
            startRecording();
        } else if (event.key == "Enter" && recording) {
            stopRecording();
        } else if (event.key == "*" || event.key == "ß") {
            shuffle();
        }
    });
    
    document.querySelector("#aButton").addEventListener("click", function(): void {play(sampleStock[3]); });
    document.querySelector("#cButton").addEventListener("click", function(): void {play(sampleStock[4]); });
    document.querySelector("#fButton").addEventListener("click", function(): void {play(sampleStock[5]); });
    document.querySelector("#gButton").addEventListener("click", function(): void {play(sampleStock[6]); });
    document.querySelector("#kickButton").addEventListener("click", function(): void {play(sampleStock[0]); });
    document.querySelector("#hiHatButton").addEventListener("click", function(): void {play(sampleStock[2]); });
    document.querySelector("#snareButton").addEventListener("click", function(): void {play(sampleStock[1]); });
    document.querySelector("#laughButtonOne").addEventListener("click", function(): void {play(sampleStock[7]); });
    document.querySelector("#laughButtonTwo").addEventListener("click", function(): void {play(sampleStock[8]); });
    document.querySelector("#playPauseButton").addEventListener("click", function(): void {if (!playing) {playBeat(); } else {stopBeat(); }});
    document.querySelector("#recordButton").addEventListener("click", function(): void {if (!recording) {startRecording(); } else {stopRecording(); }});
    document.querySelector("#shuffleButton").addEventListener("click", shuffle);
    document.querySelector("#deleteButton").addEventListener("click", clearBeat);
});
