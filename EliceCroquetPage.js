
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

/**
 *  Tabs
 *  중단 메인 페이지 탭 기능 구현
 */

var links = document.querySelectorAll(".tabs-list li a")
var items = document.querySelectorAll(".tabs-list li")
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventeDefault();
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute('href') ;
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }
}

/**
 * Click Image Slider
 * #photo .slider
 * 화면 하단 좌우 버튼 클릭 시 이미지 슬라이드 기능 구현
 */

// 오른쪽 버튼 클릭 시 이미지 슬라이드
document.querySelector(".right-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active");
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null) {
        nextSlide = currentSlide.parentElement.firstElementChild;
    }
    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    nextSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active");
    var preSlide = currentSlide.previousElementSibling;
    if (preSlide === null) {
        preSlide = currentSlide.parentElement.lastElementChild;
    }
    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    preSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    preSlide.classList.add("active");
}
