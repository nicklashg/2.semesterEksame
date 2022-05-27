console.log("It's working yay - Filter!");
let allDivs, activeDivs = [];
let criteriaDiv, showClass;

// Starts with the all filter selected
filterSelection("all")

// Job filter function
function filterSelection(criteria) {
    activeDivs = [];

    allDivs = document.getElementsByClassName("filterDiv");
    
    if (criteria == "all") criteria = "";

    // Removes class show on all activeDivs
    for (let i = 0; i < allDivs.length; i++) {
        
        let currentClassName = allDivs[i].className.indexOf(criteria);

        removeClass(allDivs[i], "show");

        // Adds class show to activeDivs array if selected job criteria is on allDivs
        if (currentClassName > -1) {
            addClass(allDivs[i], "show");
            activeDivs.push(allDivs[i]);
        };
    }
    console.log(activeDivs);
}

// Location filter function
function filterLocation(criteria) {

    // Removes class show on all selected activeDivs
    for (let i = 0; i < activeDivs.length; i++) {

        let currentClassLocation = activeDivs[i].className.indexOf(criteria);

        removeClass(activeDivs[i], "show");
        // Adds class show if selected location criteria is on activeDivs
        if (currentClassLocation > -1) {
            addClass(activeDivs[i], "show");
        };
    }
    console.log(activeDivs);
}

// Show selected divs
function addClass(element, name) {
    criteriaDiv = element.className.split(" ");
    showClass = name.split(" ");
    
    // If criteriaDiv doesn't have show class, then it will add it
    for (let i = 0; i < showClass.length; i++) {
        if (criteriaDiv.indexOf(showClass[i]) == -1) {
            element.className += " " + showClass[i];
        }
    }
}

// Hide non-selected divs
function removeClass(element, name) {
    criteriaDiv = element.className.split(" ");
    showClass = name.split(" ");

    // if criteraDiv have show class, removes it
    for (let i = 0; i < showClass.length; i++) {
        while (criteriaDiv.indexOf(showClass[i]) > -1) {
            criteriaDiv.splice(criteriaDiv.indexOf(showClass[i]), 1);
        }
    }
    element.className = criteriaDiv.join(" ");
}

// Add active class to the highlighted button
let buttonContainer = document.getElementById("BtnContainer");
let button = buttonContainer.getElementsByClassName("button");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}