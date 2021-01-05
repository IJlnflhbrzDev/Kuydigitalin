// Membuat pekondisian sebuah  icont  humberger mobile
const navbar_toggler_icon = document.querySelector('.icofont-navigation-menu');
navbar_toggler_icon.addEventListener('click',function () {
     if (navbar_toggler_icon.classList.contains('icofont-navigation-menu')) {
          navbar_toggler_icon.className = "icofont-close "
     } else {
          navbar_toggler_icon.classList.add('icofont-navigation-menu')
     }

});


// =========================================== animated schroll changed navbar active toggle ===========================================

const navbar = document.querySelector('.navbar'); ///mengambil sebuah class pembungkus navbar
window.onscroll = function () {
     let topWindowSchorllingChanged = window.scrollY; //membuat sbuah variabel dimana web sedang di schroll

     if (topWindowSchorllingChanged > 100) {
          navbar.classList.add('active_changed_navbar')
     }else {
           navbar.classList.remove('active_changed_navbar')
     }
}


// / =========================================== animated image filter portfolio      ===========================================
var gridItems = document.querySelectorAll('.item')
function showAll() {
    gridItems.forEach(function(element) {
        element.classList.add('show')
    })
}

function showCategory(category) {
    gridItems.forEach(function(element){
        if (element.classList.contains(category)) {
            element.classList.add('show')
        }
        else {
            element.classList.remove('show')
        }
    })
}
showAll()

// / =========================================== animated preloader      ===========================================
var preloader = document.getElementById('loader');
window.addEventListener('load' ,function () {
     preloader.style.display = "none";
})
