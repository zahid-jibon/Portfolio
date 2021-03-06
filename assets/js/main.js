/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrolly >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.service__modal'),
    modalBtns = document.querySelectorAll('.service__button'),
    modalClose = document.querySelectorAll('.service__modal-close')

let modal = function (modalclick) {
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((ab, i) => {
    ab.addEventListener('click', () => {
        modal(i)

    })
})

modalClose.forEach((ac) => {
    ac.addEventListener('click', () => {
        modalViews.forEach((ad) => {
            ad.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active work */

const linkWork = document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(L => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(L => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },

    },
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 53,
            sectionId = current.getAttribute('id')


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/

const themeButton = document.getElementById('theme-button')

const lightTheme = 'light-theme'

const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,

})

sr.reveal(`.home__data`)
sr.reveal(`.home_handle`, { delay: 700 })
sr.reveal(`.home_socialabc`, { delay: 900, origin: 'bottom' })
sr.reveal(`.skills`, { delay: 1100, origin: 'left' })
sr.reveal(`.services`, { delay: 1300, origin: 'right' })
sr.reveal(`.work`, { delay: 1500, origin: 'top' })
sr.reveal(`.testimonial`, { delay: 1700, origin: 'bottom' })
sr.reveal(`.contact`, { delay: 1900, origin: 'top' })
sr.reveal(`.footer`, { origin: 'bottom' })

