/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
/*sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); */

/*SCROLL SKILLS*/
/*sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});*/

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
/*sr.reveal('.contact__input',{interval: 200}); */






// Variables globales
let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let compteur2 = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let compteur3 = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth,timer2, elements2, slides2, slideWidth2,timer3, elements3, slides3, slideWidth3

window.onload = () => {
    // On récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")
    const diapo2 = document.querySelector(".diapo2")
    const diapo3 = document.querySelector(".diapo3")

    // On récupère le conteneur de tous les éléments
    elements = document.querySelector(".elements")
    elements2 = document.querySelector(".elements2")
    elements3 = document.querySelector(".elements3")

    // On récupère un tableau contenant la liste des diapos
    slides = Array.from(elements.children)
    slides2 = Array.from(elements2.children)
    slides3 = Array.from(elements3.children)

    // On calcule la largeur visible du diaporama
    slideWidth = diapo.getBoundingClientRect().width
    slideWidth2 = diapo2.getBoundingClientRect().width
    slideWidth3 = diapo3.getBoundingClientRect().width

    // On récupère les deux flèches
    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
    let next2 = document.querySelector("#nav-droite2")
    let prev2 = document.querySelector("#nav-gauche2")
    let next3 = document.querySelector("#nav-droite3")
    let prev3 = document.querySelector("#nav-gauche3")

    // On met en place les écouteurs d'évènements sur les flèches
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)
    next2.addEventListener("click", slideNext2)
    prev2.addEventListener("click", slidePrev2)
    next3.addEventListener("click", slideNext3)
    prev3.addEventListener("click", slidePrev3)

    // Automatiser le diaporama
    timer = setInterval(slideNext, 8000)
    timer2 = setInterval(slideNext2, 8000)
    timer3 = setInterval(slideNext3, 8000)

    // Gérer le survol de la souris
    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)
    diapo2.addEventListener("mouseover2", stopTimer2)
    diapo2.addEventListener("mouseout2", startTimer2)
    diapo3.addEventListener("mouseover3", stopTimer3)
    diapo3.addEventListener("mouseout3", startTimer3)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })

    window.addEventListener("resize", () => {
        slideWidth2 = diapo.getBoundingClientRect().width2
        slideNext2()
    })

    window.addEventListener("resize", () => {
        slideWidth3 = diapo.getBoundingClientRect().width3
        slideNext3()
    })
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
function slideNext(){
    // On incrémente le compteur
    compteur++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if(compteur == slides.length){
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
 function slideNext2(){
    // On incrémente le compteur
    compteur2++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if(compteur2 == slides2.length){
        compteur2 = 0
    }

    // On calcule la valeur du décalage
    let decal2 = -slideWidth2 * compteur2
    elements2.style.transform = `translateX(${decal2}px)`
}
/**
 * Cette fonction fait défiler le diaporama vers la droite
 */
 function slideNext3(){
    // On incrémente le compteur
    compteur3++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if(compteur3 == slides3.length){
        compteur3 = 0
    }

    // On calcule la valeur du décalage
    let decal3 = -slideWidth3 * compteur3
    elements3.style.transform = `translateX(${decal3}px)`
}









/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
function slidePrev(){
    // On décrémente le compteur
    compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(compteur < 0){
        compteur = slides.length - 1
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}
/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
 function slidePrev2(){
    // On décrémente le compteur
    compteur2--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(compteur2 < 0){
        compteur2 = slides2.length - 1
    }

    // On calcule la valeur du décalage
    let decal2 = -slideWidth2 * compteur2
    elements2.style.transform = `translateX(${decal2}px)`
}

/**
 * Cette fonction fait défiler le diaporama vers la gauche
 */
 function slidePrev3(){
    // On décrémente le compteur
    compteur3--

    // Si on dépasse le début du diaporama, on repart à la fin
    if(compteur3 < 0){
        compteur3 = slides3.length - 1
    }

    // On calcule la valeur du décalage
    let decal3 = -slideWidth3 * compteur3
    elements3.style.transform = `translateX(${decal3}px)`
}




/**
 * On stoppe le défilement
 */
function stopTimer(){
    clearInterval(timer)
}

/**
 * On redémarre le défilement
 */
function startTimer(){
    timer = setInterval(slideNext, 4000)
}

/**
 * On stoppe le défilement
 */
 function stopTimer2(){
    clearInterval(timer2)
}

/**
 * On redémarre le défilement
 */
function startTimer2(){
    timer2 = setInterval(slideNext2, 4000)
}

/**
 * On stoppe le défilement
 */
 function stopTimer3(){
    clearInterval(timer3)
}

/**
 * On redémarre le défilement
 */
function startTimer3(){
    timer3 = setInterval(slideNext3, 4000)
}


























function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
