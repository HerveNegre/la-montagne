const btnMenu = document.querySelector(".buttonMenu");
const menu = document.querySelector(".list-nav");
const input = document.querySelectorAll("input");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
})

//animation formulaire contact
for (let i = 0; i < input.length; i++) {
    
    let field = input[i];

    field.addEventListener("input", function(event) {

        if (event.target.value != "") {
            event.target.parentNode.classList.add("animation");
        }
        else if (event.target.value == "") {
            event.target.parentNode.classList.remove("animation");
        }
    })
    
}

//Animations Greensock
/*----------------elements barre de navigation--------------*/
const logo          = document.querySelector(".item-logo");
const itemNav       = document.querySelectorAll(".item-nav");

gsap.from(logo, {
    opacity: 0,
    duration: 2
})

gsap.from(itemNav, {
    opacity: 0,
    duration: 5
});

/*-------------------elements section accueil------------------*/ 
const sousTitre     = document.querySelector(".sous-titre");
const titre         = document.querySelector(".titre");
const btnAccueil    = document.querySelector(".btn-accueil");

const timeL = gsap.timeline();

timeL
.from(titre, {opacity: 0, duration: 2}, '+=0.5')
.from(sousTitre, {opacity: 0, duration: 2}, '-=1.4')
.from(btnAccueil, {opacity: 0, duration: 0.3}, '-=1.4')




//Animations ScrollMagic
/*----------------GSAP titre et randos------------------*/
const doContainer = document.querySelector(".do");  
const titreRandos = document.querySelector(".titreRandos");
const randos      = document.querySelector(".randos");

const timeLineRandos = new TimelineMax();

timeLineRandos
.from(titreRandos, {y: 200, opacity: 0, duration: 0.6})
.from(randos, {x: 100, opacity: 0, duration: 2})

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    
    triggerElement: doContainer,
    reverse: false

})
.setTween(timeLineRandos)
// .addIndicators()
.addTo(controller);

/*--------------------GSAP vtt---------------------*/
const imgVtt = document.querySelector(".imgVtt");
const vtt    = document.querySelector(".vtt");

const timeLineVtt = new TimelineMax();

timeLineVtt
.from(vtt, {x: -100, opacity: 0, duration: 2})

const scene2 = new ScrollMagic.Scene({
    
    triggerElement: imgVtt,
    triggerHook: 2,
    reverse: false

})
.setTween(timeLineVtt)
// .addIndicators()
.addTo(controller);

/*--------------------GSAP ski---------------------*/
const imgSki = document.querySelector(".imgSki");
const ski    = document.querySelector(".ski");

const timeLineSki = new TimelineMax();

timeLineSki
.from(ski, {x: 100, opacity: 0, duration: 2})

const scene3 = new ScrollMagic.Scene({
    
    triggerElement: imgSki,
    triggerHook: 1,
    reverse: false

})
.setTween(timeLineSki)
// .addIndicators()
.addTo(controller);

/*--------------------GSAP escalade---------------------*/
const imgEscalade = document.querySelector(".imgClimbing");
const escalade    = document.querySelector(".escalade");

const timeLineEscalade = new TimelineMax();

timeLineEscalade
.from(escalade, {x: -100, opacity: 0, duration: 2})

const scene4 = new ScrollMagic.Scene({
    
    triggerElement: imgEscalade,
    triggerHook: 1,
    reverse: false

})
.setTween(timeLineEscalade)
// .addIndicators()
.addTo(controller);

/*----------------------GSAP prix------------------------*/
const prixContainer = document.querySelector(".prix");  
const titrePrix     = document.querySelector(".titrePrix");
const leftAnimPrix  = document.querySelectorAll(".leftAnim");
const rightAnimrix  = document.querySelectorAll(".rightAnim");

const timeLineAnimPrix = new TimelineMax();

timeLineAnimPrix
.from(titrePrix, {y: 200, opacity: 0, duration: 0.6})
.staggerFrom(leftAnimPrix, 0.2, {opacity: 0}, 0.6, '-=0.1')
.staggerFrom(rightAnimrix, 0.1, {opacity: 0}, 0.6, '-=0.5')

const scene5 = new ScrollMagic.Scene({
    
    triggerElement: prixContainer,
    reverse: false

})
.setTween(timeLineAnimPrix)
// .addIndicators()
.addTo(controller);

/*----------------------GSAP contact------------------------*/
const contactContainer = document.querySelector(".contact");  
const titreContact     = document.querySelector(".titreContact");
const emailContact     = document.querySelector(".emailContact");
const nomContact       = document.querySelector(".nomContact");
const messageContact   = document.querySelector(".messageContact");
const boutonContact    = document.querySelector(".boutonContact");

const timeLineContact = new TimelineMax();

timeLineContact
.from(titreContact, {y: 200, opacity: 0, duration: 0.6})
.from(emailContact, {opacity: 0, duration: 0.6})
.from(nomContact, {opacity: 0, duration: 0.6})
.from(messageContact, {y: 200, opacity: 0, duration: 0.6})
.from(boutonContact, {y: 200, opacity: 0, duration: 0.6})

const scene6 = new ScrollMagic.Scene({
    
    triggerElement: contactContainer,
    reverse: false

})
.setTween(timeLineContact)
// .addIndicators()
.addTo(controller);
