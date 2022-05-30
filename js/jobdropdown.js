
let opretArray = new Array("Jeg hørte om jobbet igennem:", "Netværk", "Sociale medier", "Google", "Medier", "Andet");
let dropdown = document.getElementById("vælgEmne");

for (let i = 0; i < opretArray.length; i=i+1) {
    dropdown[i] = new Option(opretArray[i], opretArray[i]);
}


function dropDown() {
    document.getElementById("vælgEmne").classList.toggle("show");
}


function myFunction() {

    // Accessing form using its classname
    let form = document.getElementsByClassName("classform")[0];

    // Getting the email value
    let emailvalue = form.elements.email.value;

    // Checking whether its filled
    if (emailvalue === "") {
        alert("udfyld felt");
    } else {
        alert( "Din besked er sendt!" );
    }
}
