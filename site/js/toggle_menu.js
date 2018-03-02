function toggleProfileMenu(){
    var element = document.querySelector(".profile_menu");
    element.classList.toggle("show_profile");
    
    element = document.querySelector("main");
    element.classList.toggle("fade")
}

function toggleMenuMenu(){
    var element = document.querySelector(".menu_menu");
    element.classList.toggle("show_menu");
    
    element = document.querySelector("main");
    element.classList.toggle("fade")
}