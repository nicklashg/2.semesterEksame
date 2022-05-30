let opretArray = new Array("Jeg hørte om jobbet igennem:", "Netværk", "Sociale medier", "Google", "Medier", "Andet");
let dropdown = document.getElementById("vælgEmne");

for (let i = 0; i < opretArray.length; i=i+1) {
    dropdown[i] = new Option(opretArray[i], opretArray[i]);
}


function dropDown() {
    document.getElementById("vælgEmne").classList.toggle("show");
}


function confirmSend() {

    // Tilgår formen via dets classname
    let form = document.getElementsByClassName("classform")[0];

    // Tjekker om den er fyldt
    let emailvalue = form.elements.email.value;

    // Tjekker igen om den er fyldt
    if (emailvalue === "") {
        alert("Udfyld felt");
    } else {
        alert( "Din besked er sendt!" );
    }
}
