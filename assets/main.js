document.getElementById("menu-icon").addEventListener("click", function(){
    var item = document.getElementsByClassName('navbar')[0];
    if (item.classList.contains('nav-toggle')) {
        item.classList.remove('nav-toggle')
    } else {
        item.classList.add('nav-toggle');
    }
});
