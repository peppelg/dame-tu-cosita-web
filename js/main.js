var html_elem = document.getElementsByTagName("html")[0];
const cosite = [
  { src: "../img/a.jpg", width: "844px", height: "474px" },
  { src: "../img/b.jpg", width: "768px", height: "433px" },
  { src: "../img/c.jpg", width: "844px", height: "432px" },
  { src: "../img/d.jpg", width: "844px", height: "518px" },
  { src: "../img/e.jpg", width: "800px", height: "450px" },
];
const requestWakeLock = async function () {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (e) {}
};
const fullScreen = function () {
  try {
    if (html_elem.requestFullscreen) {
      html_elem.requestFullscreen();
    } else if (html_elem.mozRequestFullScreen) {
      /* Firefox */
      html_elem.mozRequestFullScreen();
    } else if (html_elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      html_elem.webkitRequestFullscreen();
    } else if (html_elem.msRequestFullscreen) {
      /* IE/Edge */
      html_elem.msRequestFullscreen();
    }
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape");
    }
    requestWakeLock();
  } catch (e) {}
};
var cositae = 0;
const cositaClose = async function (
  e = {
    preventDefault: function () {
      return false;
    },
  }
) {
  e.preventDefault();
  new Audio("../audio/cosita.mp3").play();
  if (cositae === 1) {
    var cositaAudio = new Audio("../../audio/dametucosita.mp3");
    if (typeof cositaAudio.loop == "boolean") {
      cositaAudio.loop = true;
    } else {
      cositaAudio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
    cositaAudio.play();
  } else cositae = 1;
  var c = cosite[Math.floor(Math.random() * cosite.length)];
  var cosita = new $Window({ title: "Dame tu cosita" });
  cosita.$content.append(
    $("<img>").prop("src", c.src).css({ width: c.width, height: c.height })
  );
  cosita.on("close", cositaClose);
  cosita.randomPos();
  return cosita;
};
var iid = 0;
$(document).on("contextmenu", function (e) {
  e.preventDefault();
});
$(document).ready(function () {
  cositaClose();
  iid = setInterval(fullScreen, 250);
});

// no back button
(function (global) {
  if (typeof global === "undefined") {
    throw new Error("window is undefined");
  }

  var _hash = "!";
  var noBackPlease = function () {
    global.location.href += "#";

    global.setTimeout(function () {
      global.location.href += "!";
    }, 50);
  };

  global.onhashchange = function () {
    if (global.location.hash !== _hash) {
      global.location.hash = _hash;
    }
  };

  global.onload = function () {
    noBackPlease();

    // Disables backspace on page except on input fields and textarea..
    document.body.onkeydown = function (e) {
      var elm = e.target.nodeName.toLowerCase();
      if (e.which === 8 && elm !== "input" && elm !== "textarea") {
        e.preventDefault();
      }
      // Stopping the event bubbling up the DOM tree...
      e.stopPropagation();
    };
  };
})(window);
history.pushState(null, document.title, location.href);
window.addEventListener("popstate", function (event) {
  history.pushState(null, document.title, location.href);
});
window.location.hash = "cosita";
window.location.hash = "grand-cosita";
window.onhashchange = function () {
  window.location.hash = "cosita";
};

$(document).bind("mouseleave", function (e) {
  if (e.pageY - $(window).scrollTop() <= 1) {
    fullScreen();
    location.reload();
    fullScreen();
  }
});
