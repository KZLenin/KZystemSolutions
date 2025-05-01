/*Hamburgesa Boton*/
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link =>{
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})
const typed = new Typed(".typed", {
    stringsElement: '#cadena-texto',
    typeSpeed: 40,        // más rápido al escribir
    startDelay: 100,      // casi sin retraso inicial
    backSpeed: 30,        // borrado fluido
    backDelay: 1200,      // pausa antes de borrar
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  });
