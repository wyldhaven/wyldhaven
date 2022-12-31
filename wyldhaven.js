
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

// var setupValues = function() {
//   scrollArrow = document.querySelector('.arrow-container');
//   scrollCopy = document.querySelector('.scroll');
// };

// var animateIntro = function() {
//   $(".scroll").delay(1900).animate({
//         opacity: .25
//     }, 2300, function() {
//         $(".arrow-container").animate({
//             opacity: .35
//         }, 1500);
//     });

// };


// var init = function() {
//   setupValues();
//   animateIntro();
// };

WYLD.scrolling = {
  init: init
};

    return WYLD;

}($, WYLD || {}));

// let counter = 0;
// function show(elem) {
//   var test = elem[0].style.opacity;
//   if ($(window).width() >= 680) {
//     if (test < 1) {
//       elem.css('opacity', (counter += 0.03));
//     }
//   } else {
//     if (test < 1) {
//       elem.css('opacity', (counter += 0.06));
//     }
//   }
// }

// function erase(elem) {
//   var test = elem[0].style.opacity;
//   if ($(window).width() >= 680) {
//     if (test > 0) {
//       elem.css('opacity', (counter -= 0.04));
//     }
//   } else {
//       if (test > 0) {
//         elem.css('opacity', (counter -= 0.03));
//       }
//     }
//   }

// var position = $(window).scrollTop();
// $(window).scroll(function() {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();
//   var elemToppy = $('h3').offset().top;
//   var elemBottom = elemToppy + $('h3').height();

//   var scroll = $(window).scrollTop();
//   if (docViewBottom >= (Number(elemBottom) - 80) && docViewTop <= (Number(elemBottom)) - 70) {
//     if (docViewTop >= (Number(elemBottom)) - 400) {
//         erase($('h3'));
//     } else {
//         if (scroll > position) {
//            show($('h3'));
//         } else {
//            erase($('h3'));
//         }
//       }
//     }
//   position = scroll;
// });
