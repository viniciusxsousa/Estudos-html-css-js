(function(){
    'use strict';

    var $hamburguerMenu = document.querySelector('.header-nav__hamburgger');
    var $html = document.querySelector('html');
    
    $hamburguerMenu.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');
    })

})()