var audio = document.getElementById("BGmusic");
var btn = document.getElementById("AudioBtn");
var Image_Id1 = document.getElementById('musicImg');

function amyFunction() {

    if (audio.paused) {
        audio.play();
        Image_Id1.src = "buttons/pause1.png";
    } else {
        audio.pause();
        Image_Id1.src = "buttons/play1.png";
    }
}