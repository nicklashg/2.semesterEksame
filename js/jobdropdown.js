console.log("Dropdown activated");


function dropDown() {
    document.getElementById("vælgEmne").classList.toggle("show");
}

let opretArray = new Array("Jeg hørte om jobbet igennem:", "Netværk", "Sociale medier", "Google", "Medier", "Andet");

    let dropdown = document.getElementById("vælgEmne");

    for (let i = 0; i < opretArray.length; ++i) {
        dropdown[dropdown.length] = new Option(opretArray[i], opretArray[i]);
    }



    function myFunction() {
            console.log("Har trykket");
            let emailvalue = document.getElementsByClassName("classform")[0].elements.email.value
            if (emailvalue === "")
            {
            alert("udfyld felt");
            return false;
            }
            else
            {
            alert( "Din besked er sendt!" );
            return true;
            }
            }
