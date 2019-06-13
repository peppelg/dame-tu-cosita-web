const cosite = [
    "../img/a.jpg",
    "../img/b.jpg",
    "../img/c.jpg",
    "../img/d.jpg",
    "../img/e.jpeg",
    "../img/f.jpg",
    "../img/g.jpg",
];
const cositaClose = function(e = {preventDefault: function(){}}) {
    e.preventDefault();
    var cosita = new $Window({title: "Dame tu cosita"});
    cosita.$content.append($("<img>").prop("src", cosite[Math.floor(Math.random() * cosite.length)]));
    cosita.on("close", cositaClose);
};
cositaClose();

