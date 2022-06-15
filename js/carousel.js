console.log('det dur');

/* Gøres brug af JQuery */
/* $ selecter det der står inde i parentecen efterfølgende */

let carousel = $(".carousel");

/* Tildeler 0 til variablen currdeg */
let currdeg = 0;

/* selecter pilene, og siger når der klikkes på dem, skal carousellen henholdvis
drejes højre om og venstre om. */
$(".next").on("click", {d: "n"}, rotate);
$(".prev").on("click", {d: "p"}, rotate);

/* Opretter funktionen rotate */
function rotate(e){
    /* hvis der klikkes på venstre pil, drejes carousellen med -30 */
    if(e.data.d=="n"){
        currdeg = currdeg - 30;
    }
    /* hvis der klikkes på højre pil, drejes carousellen med +30 */
    if(e.data.d=="p"){
        currdeg = currdeg + 30;
    }
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
}





/* let arrayToShowLoop = ['dette', 'skaber', 'en', 'sætning']

function SkabEnSaetning()
{
    for (i = 0; i < arrayToShowLoop.length; i++) 
    {
        console.log(arrayToShowLoop[i])
    }
}

SkabEnSaetning(); */

/* function scrollanimation()
{
    const scrollElements = document.querySelectorAll(".scroll");

    scrollElements.forEach((el) => 
    {
        el.style.opacity = 0
    })
} */






function randomdisplay()
{
    let i = 0;

    let carouselparent = document.getElementsByClassName("carousel")[0];
    
    let carouselrandom = document.getElementsByClassName("carousel")[0].children;

    /* let random;
    random = Math.floor(Math.random()*carouselrandom.length);

    let randomRotate = ['(0deg)', '(30deg)', '(60deg)', '(90deg)', '(120deg)', '(150deg)', '(180deg)', '(210deg)', '(240deg)', '(270deg)', '(300deg)', '(330deg)'] */


    for(i=0; i<carouselrandom.length; i++)
    {
        console.log(carouselparent);
    }
}

randomdisplay();


/* interbefore */



/* 'rotateY(randomRotate[random])' */



/* 

let partnerList=new Array()
    partnerList[0]= '<div class="item a"></div>';
    partnerList[1]= '<div class="item b"></div>';
    partnerList[2]= '<div class="item c"></div>';
    partnerList[3]= '<div class="item d"></div>';
    partnerList[4]= '<div class="item e"></div>';
    partnerList[5]= '<div class="item f"></div>';
    partnerList[6]= '<div class="item g"></div>';
    partnerList[7]= '<div class="item h"></div>';
    partnerList[8]= '<div class="item i"></div>';
    partnerList[9]= '<div class="item j"></div>';
    partnerList[10]= '<div class="item k"></div>';
    partnerList[11]= '<div class="item l"></div>';




console.log(random + 'ost');
 */






// Select all slides




