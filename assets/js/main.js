function clock(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(seconds<10){
        seconds = "0" + seconds;
    }
    document.getElementById("header__navbar-time").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("clock()",1000);
}

/*
var header = document.getElementsByClassName('header');
console.log(header);

var mobileMenu = document.getElementsByClassName('mobile-menu-btn');
console.log(mobileMenu);

var headerHeight = header.clientHeight;

    mobileMenu.onclick = function() {
    var isOpen = header.clientHeight === headerHeight ;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
    }

var menuItems = document.querySelectorAll('.header__navbar > .header__navbar-list li a[href*="#"]');
console.log(menuItems)
for (var i =0; i< menuItems.length; i++) {
    var menuItem = menuItems[i];
    console.log(menuItem);
} */