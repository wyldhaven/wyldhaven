/* ----- Designed and coded by Grayson Randall -----
----- https://graysonrandall.github.io/portfolio/index.html ----- */

var WYLD = (function($, WYLD) {

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 500, function() {
            });
        }
    });
});

var setupValues = function() {
  scrollArrow = document.querySelector('.arrow-container');
  scrollCopy = document.querySelector('.scroll');
};

var animateIntro = function() {
  $(".scroll").delay(1900).animate({
        opacity: .6
    }, 2300, function() {
        $(".arrow-container").animate({
            opacity: .6
        }, 1500);
    });

};


var init = function() {
  setupValues();
  animateIntro();
};

WYLD.scrolling = {
  init: init
};

    return WYLD;

}($, WYLD || {}));

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemToppy = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    var correction = (docViewBottom - elemToppy);
    var elemTop = (Number(elemToppy) + correction);

    if (elemBottom >= elemTop) {
      console.log('woo');
        elem.css("clip", "rect(0px,1000px," + (176 - 1) + "px,0px)");
    }
    console.log('docViewTop = ' + docViewTop + ' docViewBottom = ' + docViewBottom + ' elemTop = ' + elemToppy + ' elemToppy = ' + elemBottom);
}

$(window).scroll(function() {
  var elem = $('h3');
  // var docViewTop = $(window).scrollTop();
  // var docViewBottom = docViewTop + $(window).height();
  // var elemToppy = $(elem).offset().top;
  //
  //
  // var correction = (docViewBottom - elemToppy);
  // var elemTop = (Number(elemToppy) + correction);
  // var elemBottom = elemTop + $(elem).height();

    // if (docViewBottom >= (Number(elemBottom) + 50)) {
      isScrolledIntoView(elem);
    // }
});
