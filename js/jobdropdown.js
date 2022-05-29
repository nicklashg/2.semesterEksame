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
            let response = ["Udfyld felt", "Din besked er sendt!"];
            let empt = document.form1.Titel.value;
            if (empt === "")
            {
            alert( response[0] );
            return false;
            }
            else
            {
            alert( response[1] );
            return true;
            document.getElementById("demo").innerHTML = "Good day";
            }
            }
