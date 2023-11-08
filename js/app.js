var acc = document.getElementsByClassName("accordion");
var allPanel = document.querySelectorAll(".panel");
var allArrow = document.querySelectorAll(".accordion img");
var i;



for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight === "15rem") {
            panel.style.maxHeight = 0;
            this.querySelector("img").src = './asset/icon/arrow-next.svg';

        } else {
            allPanel.forEach(element => {
                element.style.maxHeight = 0;
            });
            allArrow.forEach(element => {
                element.src = './asset/icon/arrow-next.svg'
            })

            panel.style.maxHeight = "15rem";
            this.querySelector("img").src = './asset/icon/arrow-down.svg';

        }
    });
}

const up = document.querySelector('#up');
up.addEventListener('click', () => {
    window.scrollTo(0, 0)
});



function updateImage() {
    const imageElement = document.querySelectorAll('#my-image');
    const windowWidth = window.innerWidth;
    imageElement.forEach((v, i) => {
        if (windowWidth <= 576) {
            v.src = `./asset/header/asnaf.mob${i + 1}.jpg`;
            v.alt = "banner";
        } else {
            v.src = `./asset/header/header${i + 1}.jpg`;
            v.alt = "banner";
        }
    })

}
window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage);



AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});


const search = document.querySelectorAll('#search');
const searchBox = document.querySelector('.search-box');
const closeBtn = document.querySelector('#close');
const searchInput = document.querySelector('.search-box__input input');
const searchIcon = document.querySelector('#searchIcon');

search.forEach(v => {
    v.addEventListener('click', () => {
        searchBox.style.display = 'block'
    })
})

closeBtn.addEventListener('click', () => {
    searchBox.style.display = 'none'
});

searchIcon.addEventListener('click', () => {
    if (searchInput.value) {
        location.href = `https://asnafbns.com/search/index.php?q=${searchInput.value}`
    }
});


const userData = document.querySelector('.nav__more-data');

window.addEventListener('click', e => {
    if (e.target.id === 'user-icon') {

        if (userData.style.display === 'flex') {
            userData.style.display = 'none'
        } else {
            userData.style.display = 'flex'
        }
    } else {
        userData.style.display = 'none'
    }

})


const closeBtnMenu = document.querySelector('#closeBtn-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('#menu-icon');
const mobileMenuLogin = document.querySelector('#mobile-menu__login');
const mobileSubMenu = document.querySelector('.mobile-subMenu');
const backToMenu = document.querySelector('#back-to-menu');

closeBtnMenu.addEventListener('click', () => {
    mobileMenu.style.left = '-100%'
})

menuIcon.addEventListener('click', () => {
    mobileMenu.style.left = '0'
})

mobileMenuLogin.addEventListener('click', () => {
    mobileSubMenu.style.left = '0'
})
backToMenu.addEventListener('click', () => {
    mobileSubMenu.style.left = '-100%'
})


var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true

    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
});



const noCourses = document.querySelectorAll('#no-courses');
noCourses.forEach(v => {
    v.addEventListener('click', () => {
        Swal.fire({
            title: "دوره ها به زودی اضافه میشوند.",
            icon: "info",
            confirmButtonText: "تایید",
        
        });
    })
})