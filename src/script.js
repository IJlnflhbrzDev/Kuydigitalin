const navbar_toggler_icon = document.querySelector('.icofont-navigation-menu');
navbar_toggler_icon.addEventListener('click',function () {
     if (navbar_toggler_icon.classList.contains('icofont-navigation-menu')) {
          navbar_toggler_icon.className = "icofont-close "
     } else {
          navbar_toggler_icon.classList.add('icofont-navigation-menu')
     }

})