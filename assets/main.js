document.getElementById("menu-icon").addEventListener("click", function(){
    var item = document.getElementsByClassName('navbar')[0];
    if (item.classList.contains('nav-toggle')) {
        item.classList.remove('nav-toggle')
    } else {
        item.classList.add('nav-toggle');
    }
});

function addClassNameListener(elemId, callback) {
    var elem = document.getElementById(elemId);
    var lastClassName = elem.className;
    window.setInterval( function() {
       var className = elem.className;
        if (className !== lastClassName) {
            callback();
            lastClassName = className;
        }
    },10);
}
addClassNameListener('navbarMain', function() {
    var navToggleButton = document.querySelectorAll('.nav-toggle li > a');
    for (var i = 0; i < navToggleButton.length; i++) {
        navToggleButton[i].addEventListener("click", function(){
            document.querySelectorAll('.nav-toggle')[0].classList.remove('nav-toggle');
        });
    }
});



window.addEventListener("scroll", function() {
    navbarCheck();
});
window.addEventListener("resize", function() {
    navbarCheck();
});
document.addEventListener("DOMContentLoaded", function(event) {
    navbarCheck();
    var event = document.createEvent('HTMLEvents');
    event.initEvent('scroll', true, false);
    document.dispatchEvent(event);
});

// Functions
//function navbarCheck() {

//}
function navbarCheck() {
    var item = document.getElementById('site-header');
    if (document.body.scrollTop > item.offsetHeight && !item.classList.contains('scrolled')) {
        item.classList.add('scrolled');
    }
    else if (document.body.scrollTop <= item.offsetHeight && item.classList.contains('scrolled')) {
        item.classList.remove('scrolled');
    }
};
