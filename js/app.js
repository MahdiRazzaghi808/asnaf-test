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
const showCourses = document.querySelectorAll('#show-courses');
showCourses.forEach(v => {
    v.addEventListener('click', () => {
        if (sessionStorage.getItem('cityLink')) {
            location.href = JSON.parse(sessionStorage.getItem('cityLink'))[v.dataset.name]
        } else {
            Swal.fire({
                title: 'شهر خود را انتخاب کنید...',
                html:
                    `<div class='chose-city'>
                    <div>
                        <label for="firstSelect">استان:</label>
                        <select class="os" id="oss" onchange="myFunctionCity()">
                        <option value="" disabled selected></option>
                            <option value="AzerbaijanEast">آذربايجان شرقي</option>
                            <option value="AzerbaijanWest">آذربايجان غربي</option>
                            <option value="Ardabil">اردبيل</option>
                            <option value="Isfahan">اصفهان</option>
                            <option value="Alborz">البرز</option>
                            <option value="Ilam">ايلام</option>
                            <option value="Bushire">بوشهر</option>
                            <option value="Tehran">تهران</option>
                            <option value="ChaharmahalAndBakhtiari">چهارمحال و بختياري</option>
                            <option value="SouthKhorasan">خراسان جنوبي</option>
                            <option value="RazaviKhorasan">خراسان رضوي</option>
                            <option value="NorthKhorasan">خراسان شمالي</option>
                            <option value="Khuzestan">خوزستان</option>
                            <option value="Zanjan">زنجان</option>
                            <option value="Semnan">سمنان</option>
                            <option value="SistanAndBaluchestan">سيستان و بلوچستان</option>
                            <option value="Fars">فارس</option>
                            <option value="Qazvin">قزوين</option>
                            <option value="Qom">قم</option>
                            <option value="Kurdistan">كردستان</option>
                            <option value="Kerman">كرمان</option>
                            <option value="Kermanshah">كرمانشاه</option>
                            <option value="KohgiluyehAndBoyerAhmad">كهگيلو بوير احمد</option>
                            <option value="Golestan">گلستان</option>
                            <option value="Gilan">گيلان</option>
                            <option value="Lorestan">لرستان</option>
                            <option value="Mazandaran">مازندران</option>
                            <option value="Markazi">مركزي</option>
                            <option value="Hormozgan">هرمزگان</option>
                            <option value="Hamedan">همدان</option>
                            <option value="Yazd">يزد</option>
                        </select>
                    </div>
            
                    <div>
                        <label for="secondSelect" >شهر :</label>
                        <select id="city" class='os'>
                        </select>
                    </div>
                </div>
                                        `
                ,
                showConfirmButton: true,
                confirmButtonText: "تایید"
            })
                .then(res => {
                    if (res.isConfirmed) {
                        const oss = document.querySelector('#oss');
                        const city = document.querySelector('#city');
                        getCityInfo(oss.value, city.value)
                    }
                })
        }



    })
})

async function myFunctionCity() {
    const city = document.querySelector('#city');
    const os = document.querySelector('#oss');
    const res = await fetch(`https://asnaf-lms.iran.liara.run/emptyCities/${os.value}`);
    const result = await res.json();
    city.innerHTML = '';
    let text = ''
    result.forEach(element => {
        text += `<option value="${element.id}">${element.city}</option>`
    });
    if (!result.length) {
        text += `<option value="">شهری برای دوره یافت نشد</option>`
    }
    city.innerHTML = text
}


const getCityInfo = async (os, city) => {
    const res = await fetch(`https://asnaf-lms.iran.liara.run/${os}/${city}`);
    const result = await res.json();
    sessionStorage.setItem("cityLink", JSON.stringify(result));

}