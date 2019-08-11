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

$(window).scroll(function() {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();
  let elemToppy = $(elem).offset().top;

  let correction = (docViewBottom - elemToppy);
  let elemTop = (Number(elemToppy) + correction);

  let elem;

    if (docViewBottom >= elemBottom) {
      isScrolledIntoView($('h3'));
    }

    function isScrolledIntoView(elem) {
        if (elemBottom >= elemTop) {
          console.log('woo');
            elem.css("clip", "rect(0px,1000px," + (176 - 1) + "px,0px)");
        }
        console.log('docViewTop = ' + docViewTop + ' docViewBottom = ' + docViewBottom + ' elemTop = ' + elemToppy + ' elemToppy = ' + elemBottom);
    }
});
