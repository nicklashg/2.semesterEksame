
/* Tildeler knappen med id 'mybtn' til variablen mybutton */
mybutton = document.getElementById("myBtn");

/* tildeler et 4 langt array med farver til variablen colors */
let colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

/* Når der rulles på siden, skal functionen scrollFunction kaldes */
window.onscroll = function () {scrollFunction()};

/* Opretter functionen scrollFunction */
function scrollFunction() 
{
    /* Når vi er 20 nede af y aksen vises knappen ellers 'none' i display. */
    if (document.documentElement.scrollTop > 20) 
    {
        mybutton.style.display = "block";
    } else
    {
        mybutton.style.display = "none";
    }
}

/* opretter functionen topFunction */
function topFunction()
{
    /* Da btn har onclick kald fra html vil indholdet her ske når knappen trykkes. */
    /* Ruller siden op til toppen */
    document.documentElement.scrollTop = 0;

    /* Går igennem alle farverne fra arrayet, men da den går hele vejen 
    igennem arrayet viser den kun den sidste farve i arrayet */
    for (i = 0; i < colors.length; i++) 
    {
        mybutton.style.backgroundColor = colors[i];
    }
}
