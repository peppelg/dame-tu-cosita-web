const cosite = [
    {src: "../img/a.jpg", width: "844px", height: "474px"},
    {src: "../img/b.jpg", width: "768px", height: "433px"},
    {src: "../img/c.jpg", width: "844px", height: "432px"},
    {src: "../img/d.jpg", width: "844px", height: "518px"},
    {src: "../img/e.jpg", width: "800px", height: "450px"},
];
const fullScreen = function() {
    try {
        var el = $("html")[0];
        fs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
        fs.call(el);
    } catch(e) {

    }
};
var cositae = 0;
const cositaClose = async function(e = {preventDefault: function(){return false;}}) {
    e.preventDefault();
    new Audio("../../audio/cosita.mp3").play();
    if(cositae === 1) {
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
    } else cositae = 1;
    var c = cosite[Math.floor(Math.random() * cosite.length)];
    var cosita = new $Window({title: "Dame tu cosita"});
    cosita.$content.append($("<img>").prop("src", c.src).css({width: c.width, height: c.height}));
    cosita.on("close", cositaClose);
    cosita.randomPos();
    return cosita;
};
var iid = 0;
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});
$(document).ready(function() {
    cositaClose();
    iid = setInterval(fullScreen, 250);
});
