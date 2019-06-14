const cosite = [
    "../img/a.jpg",
    "../img/b.jpg",
    "../img/c.jpg",
    "../img/d.jpg",
    "../img/e.jpg",
];
const alwaysFullScreen = function() {
    try {
    var el = $("html")[0];
    fs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
    fs.call(el);
    console.clear();
    } catch(e) {

    }
};
const cositaClose = async function(e = {preventDefault: function(){return false;}}) {
    e.preventDefault();
    new Audio("../../audio/cosita.mp3").play();
    var cositaAudio = new Audio("../../audio/dametucosita.mp3");
    if (typeof cositaAudio.loop == 'boolean') {
        cositaAudio.loop = true;
    } else {
        cositaAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    cositaAudio.play();
    var cosita = new $Window({title: "Dame tu cosita"});
    cosita.$content.append($("<img>").prop("src", cosite[Math.floor(Math.random() * cosite.length)]));
    cosita.on("close", cositaClose);
    cosita.randomPos();
    return cosita;
};
var iid = 0;
$(document).ready(function() {
    cositaClose();
    iid = setInterval(alwaysFullScreen, 250);
});
