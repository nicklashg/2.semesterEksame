var elements = document.getElementsByClassName('testtest');
var colors = {
    "blue": '#0020bf',
    "blue2": '#0030bf',
    "Red": 'red'
}


for (var i=0; i < elements.length; i++)
{
    elements[i].style.color = colors[i];
}


console.log(colors);
console.log('hej');