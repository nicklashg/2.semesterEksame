var carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", {d: "n"}, rotate);
$(".prev").on("click", {d: "p"}, rotate);

function rotate(e){
    if(e.data.d=="n"){
        currdeg = currdeg - 30;
    }
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

/* 'document.getElementsByClassName("button")' - tæller som array */

