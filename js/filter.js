console.log("It's working yay - Filter!");
let x, activeDivs = [];
let y;
let last;

// Select filter
filterSelection("all")
function filterSelection(c) {
    let i;
    last = c;
    activeDivs = [];
    
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";

    // Removes class show
    for (i = 0; i < x.length; i++) {

        removeClass(x[i], "show");
        // Adds class show if selected
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
            activeDivs.push(x[i]);
        };
    }
    console.log(activeDivs);
}

// Location filter
function filterLocation(c) {
    let i;

    // Removes class show
    for (i = 0; i < activeDivs.length; i++) {
        removeClass(activeDivs[i], "show");
        // Adds class show if selected
        if (activeDivs[i].className.indexOf(c) > -1) {
            addClass(activeDivs[i], "show");
        };
    }
    console.log(activeDivs);
}

// Show filtered elements
function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide non-selected elements
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the highlighted button
let buttonContainer = document.getElementById("BtnContainer");
let butt = buttonContainer.getElementsByClassName("button");

for (var i = 0; i < butt.length; i++) {
    butt[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}