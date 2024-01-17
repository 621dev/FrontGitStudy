
/*
1) Scroll Navigation
화면 상단 메뉴 클릭 시 해당 페이지로 내려감
 */
var aTags = document.querySelectorAll('header a');
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) {
        e.preventDefault() ;
        var target = document.querySelector(this.getAttribute('href'));

        window.scrollTo ({
            'behavior': 'smooth',
            'top': target.offsetTop
        })
    }
}

/**
 *  Image Slider
 *  - 화면 상단 메인 이미지를 주기적으로 좌우 슬라이드 시켜줌
 */

var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;

setInterval(function() {
    var from = -(1024 * currentSlide);
    var to = from - 1024;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 3000);