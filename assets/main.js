document.getElementById("menu-icon").addEventListener("click", function(){
    var item = document.getElementsByClassName('navbar')[0];
    if (item.classList.contains('nav-toggle')) {
        item.classList.remove('nav-toggle')
    } else {
        item.classList.add('nav-toggle');
    }
});
window.addEventListener("scroll", function() {
    navbarCheck();
});
window.addEventListener("resize", function() {
    navbarCheck();
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
