// Get the modal
var log = document.getElementById("log");
var sign = document.getElementById("sign");
var logclose = document.getElementById("log-close");
var signclose = document.getElementById("sign-close");

// Get the button that opens the modal
var signbtn = document.getElementById("signBtn");
var logbtn = document.getElementById("logBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("popstate", detectHistory);

function orlog() {
  sign.style.display = "none";
  log.style.display = "block";
}
function orsign() {
  sign.style.display = "block";
  log.style.display = "none";
}
// When the user clicks the button, open the modal
logbtn.onclick = function () {
  log.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};
signbtn.onclick = function () {
  sign.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};

// When the user clicks on <span> (x), close the modal
logclose.onclick = function () {
  log.style.display = "none";
  history.back();
};
signclose.onclick = function () {
  sign.style.display = "none";
  history.back();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sign) {
    sign.style.display = "none";
    history.back();
  }
  if (event.target == log) {
    log.style.display = "none";
    history.back();
  }
};

function detectHistory() {
  sign.style.display = "none";
  log.style.display = "none";
}

var li = document.getElementById("ulist").getElementsByTagName("li");
var after = document.getElementById("ulist").getElementsByClassName("after");

var im = document.getElementById("im");
var images = [
  "computing_work_background_computer_lightbulb_digital_elements_sketch_6853111.jpg",
  "Screenshot 2021-11-27 003607.jpg",
  "computing_work_background_computer_lightbulb_digital_elements_sketch_6853111.jpg",
  "Screenshot 2021-11-27 003607.jpg",
];
var x = -1;

for (var i = 0; i < 4; i++) {
  console.log(i);
  li[i].addEventListener("click", function () {
    var value = this.innerHTML;
    console.log(this.classList);

    this.classList.add("act");
    console.log(value);
    if (value == "Learn at your own pace") {
      var val = 1;
    }
    if (value == "Structured premium curriculum") {
      var val = 2;
    }
    if (value == "1:1 mentoring &amp; Doubt solving in 5 minutes") {
      var val = 3;
    }
    if (value == "Develop killer real-world projects") {
      var val = 4;
    }
    change(val);
  });
}

function change(val) {
  console.log(val);
  switch (val) {
    case 1:
      im.setAttribute("src", images[0]);
      li[0].classList.add("act");
      li[1].classList.remove("act");
      li[2].classList.remove("act");
      li[3].classList.remove("act");
      after[0].classList.add("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.remove("after-act");
      x = -1;
      break;
    case 2:
      im.setAttribute("src", images[1]);
      li[0].classList.remove("act");
      li[1].classList.add("act");
      li[2].classList.remove("act");
      li[3].classList.remove("act");
      after[0].classList.remove("after-act");
      after[1].classList.add("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.remove("after-act");
      x = 0;
      break;
    case 3:
      im.setAttribute("src", images[2]);
      li[0].classList.remove("act");
      li[1].classList.remove("act");
      li[2].classList.add("act");
      li[3].classList.remove("act");
      after[0].classList.remove("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.add("after-act");
      after[3].classList.remove("after-act");
      x = 1;
      break;
    case 4:
      im.setAttribute("src", images[3]);
      li[0].classList.remove("act");
      li[1].classList.remove("act");
      li[2].classList.remove("act");
      li[3].classList.add("act");
      after[0].classList.remove("after-act");
      after[1].classList.remove("after-act");
      after[2].classList.remove("after-act");
      after[3].classList.add("after-act");

      x = 2;
      break;
  }
}

function startTimer() {
  setInterval(displayNextImage, 2000);
}
function displayNextImage() {
  x = x === images.length - 1 ? 0 : x + 1;
  im.src = images[x];
  li[0].classList.remove("act");
  li[1].classList.remove("act");
  li[2].classList.remove("act");
  li[3].classList.remove("act");
  after[0].classList.remove("after-act");
  after[1].classList.remove("after-act");
  after[2].classList.remove("after-act");
  after[3].classList.remove("after-act");
  li[x].classList.add("act");
  after[x].classList.add("after-act");
}

var query = document.getElementsByClassName("query-asked");

for (var i = 0; i < 4; i++) {
  query[i].addEventListener("click", function () {
    // for (var j = 0; j < 4; j++) {
    //   query[j].find(".query-ans").fadeOut();
    // }
    $(".query-asked > .query-ans")
      .not($(this).children(".query-ans"))
      .fadeOut();
    $(".query-asked > button")
      .not($(this).children("button"))
      .removeClass("button-border");
    $(".query-asked > button>.minus")
      .not($(this).children("button").children(".minus"))
      .hide();
    $(".query-asked > button> .plus")
      .not($(this).children("button").children(".plus"))
      .show();
    $(".query-asked").not(this).removeClass("active-query", 500);
    $(this).children(".query-asked button").toggleClass("button-border");
    var min = $(this).children(".query-asked button").children(".minus");
    var plu = $(this).children(".query-asked button").children(".plus");
    min.toggle();
    plu.toggle();
    var divToSlide = jQuery(this).children(".query-ans");
    divToSlide.fadeToggle();
    $(this).toggleClass("active-query", 500);
  });
}
/****************************change************************/

function video_open() {
  var lightBoxVideo = document.getElementById("TutedudeVideo");
  lightBoxVideo.style.display = "inline";
  document.getElementById("thumbnail").style.display = "none";
  document.getElementById("video-button").style.padding = "0";
  document.getElementById("video-button").style.background = "transparent";
  lightBoxVideo.play();
}

/******************course step**************** */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0";
    } else {
      content.style.padding = "0rem 2rem 2rem";
      content.style.maxHeight = content.scrollHeight + "rem";
    }
  });
}

var read = document.getElementById("read");
read.addEventListener("click", function () {
  this.style.display = "none";
  var content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = "0";
  } else {
    content.style.padding = "0rem 2rem 2rem";
    content.style.maxHeight = content.scrollHeight + "rem";
  }
});
