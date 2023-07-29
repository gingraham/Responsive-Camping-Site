/*=============== SHOW MENU VARIABLES ===============*/
const navMenu = document.querySelector('#nav-menu'),
     toggle = document.querySelector('#nav-toggle'),
     closeBtn = document.querySelector('#nav-close')
/*=============== MENU SHOW/HIDE FUNCTION FOR BTNS ===============*/
       
        // Check for the toggle btn first then SHOW
if(toggle){
    toggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
        // Check for the close btn first then HIDE
if(closeBtn){
    closeBtn.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU WHEN A LINK IS CLICKED ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.querySelector('#header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== GSAP ANIMATION ===============*/

gsap.from('.home__img-2', 1.2, {opacity: 0, y: 200, delay: .1})
gsap.from('.home__img-3', 1.2, {opacity: 0, y: 200, delay: .5})
gsap.from('.home__data', 1.2, {opacity: 0, y: -60, delay: 1})
gsap.from('.home__bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1})
gsap.from('.home__bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})
gsap.from('.home__img-1', 1.2, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home__img-4', 1.2, {opacity: 0, x: 200, delay: 1.3})