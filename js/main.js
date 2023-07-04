// Navbar
const btnBar = document.querySelector('.btn-bar')
const nav = document.querySelector('nav')
const logoMobile = document.querySelector('.bg-logo')
const weather = document.querySelector('.nav-bar .weather')

btnBar.addEventListener('click', () => {
    weather.classList.toggle('active')
    nav.classList.toggle('active')
    logoMobile.classList.toggle('active')

    const isOpen = nav.classList.contains('active')
    
    btnBar.classList = isOpen ? 'fa-solid fa-xmark btn-bar' : 'fa-solid fa-bars btn-bar'
})

// DropDonw Submenu - Mobile
const dropdown = document.querySelectorAll('.dropdown')
const submenu = document.querySelectorAll('.submenu')
const dropdownIcon = document.querySelectorAll('.dropdown i')

dropdown.forEach((item, index) => {
    item.addEventListener('click', () => {
        if(item.className.includes('1')) {
            submenu[0].classList.toggle('active')
            submenu[1].classList.remove('active')
            const isOpen = submenu[0].classList.contains('active')
            dropdownIcon[0].classList = isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
            dropdownIcon[1].classList = 'fa-solid fa-angle-down'
        } else if(item.className.includes('2')) {
            submenu[1].classList.toggle('active')
            submenu[0].classList.remove('active')
            const isOpen = submenu[1].classList.contains('active')
            dropdownIcon[1].classList = isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
            dropdownIcon[0].classList = 'fa-solid fa-angle-down'
        }
    })
})

// Button Top
let scrollUp = document.querySelector('.btn-top');

window.onscroll = function() {
    this.scrollY >= 800? scrollUp.classList.add('show'): scrollUp.classList.remove('show');
    window.addEventListener('scroll', sticky)
    if(window.location.pathname === '/' || window.location.pathname.includes('index')) {
        window.addEventListener('scroll', counter)
    }
}
scrollUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const navbar = document.querySelector('.nav-bar')

function sticky() {
    if(window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}
// Change Language
const menuLang = document.querySelector('.menu-lang')

menuLang.addEventListener('click', () => {
    menuLang.classList.toggle('active')
})


function startCount(el) {
    let goal = el.dataset.goal
    let countN = setInterval(() => {
        el.textContent++
        if(el.textContent == goal) {
            clearInterval(countN)
        }
    }, 0.0000000000000000000000001 / goal)
}


// type
const types = document.querySelectorAll('.type')
const typesArray = Array.from(types)

types.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.classList.remove('active')
        types.forEach((el) => {
            el.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })

})

// Indactor
const navLinks = document.querySelectorAll('.nav__link')
const windowPathname = window.location.pathname
navLinks.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname

    if((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLink.classList.add('active')
    }
    if(navLinks[2].baseURI.includes('services')) {
        navLinks[2].classList.add('active')
    }
    if(navLinks[3].baseURI.includes('products')) {
        navLinks[3].classList.add('active')
    }
    if(navLinks[2].baseURI.includes('works')) {
        navLinks[2].classList.add('active')
    }
    if(navLinks[5].baseURI.includes('blog')) {
        navLinks[5].classList.add('active')
    }
})
