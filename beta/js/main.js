const cosite = [
    "../img/a.jpg",
    "../img/b.jpg",
    "../img/c.jpg",
    "../img/d.jpg",
    "../img/e.jpg",
];

const cositaClose = async function(e = {preventDefault: function(){}}) {
    e.preventDefault();
    console.log(await new Audio("../../audio/dametucosita.mp3").play());
    var cosita = new $Window({title: "Dame tu cosita"});
    cosita.$content.append($("<img>").prop("src", cosite[Math.floor(Math.random() * cosite.length)]));
    cosita.on("close", cositaClose);
    cosita.randomPos();
    return cosita;
};
cositaClose();

