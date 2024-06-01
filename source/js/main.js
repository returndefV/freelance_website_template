AOS.init();


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (nav && menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  nav.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', () => {
      nav.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}