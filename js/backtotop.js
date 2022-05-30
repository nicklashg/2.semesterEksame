mybutton = document.getElementById("myBtn");
let colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

window.onscroll = function () {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block";
    } else
    {
        mybutton.style.display = "none";
    }
}

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    for (i = 0; i < colors.length; i++) 
    {
        mybutton.style.backgroundColor = colors[i];
    }
}

