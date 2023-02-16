const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.menu');
const menuInfo = document.querySelector('.menuInfo')

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuInfo.classList.toggle('active')
})