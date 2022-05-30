console.log("It's working yay - Filter!");

let activeDivs = [];

// Select filter
filterSelection("all");

// Filter job function
function filterSelection(filterCriteria) {
	activeDivs = [];

	let allFilterDivs = document.getElementsByClassName("filterDiv");
    
	if (filterCriteria == "all") filterCriteria = "";
    
	for (let i = 0; i < allFilterDivs.length; i++) {
        // Removes show class on allFilterDivs
		removeClass(allFilterDivs[i], "show");

		let currentClassName = allFilterDivs[i].className.indexOf(filterCriteria);

        // If allFilterDivs have specified filterCriteria, adds show
		if (currentClassName != -1) {
			addClass(allFilterDivs[i], "show");

			activeDivs.push(allFilterDivs[i]);

		}
	}

	console.log(activeDivs);
}

// Location filter function
function filterLocation(filterCriteria) {

	for (let i = 0; i < activeDivs.length; i++) {
        // Removes class show
		removeClass(activeDivs[i], "show");

		let currentClassName = activeDivs[i].className.indexOf(filterCriteria);

		// Adds show class on activeDivs, if selected location criteria is selected
		if (currentClassName != -1) {
			addClass(activeDivs[i], "show");
		}
	}

	console.log(activeDivs);
    
}

// Show filtered elements
function addClass(element, name) {
	
	let classNames = element.className.split(" ");

	// If classNames string doesn't have show, adds it
	if (classNames.indexOf(name) == -1) {
		element.className += " " + name;
	}  
}

// Hide non-selected elements
function removeClass(element, name) {

	let classNames = element.className.split(" ");

	// If classNames string have show, removes it
	if (classNames.indexOf(name) != -1) {
		classNames.splice(classNames.indexOf(name), 1);
	}
    
	element.className = classNames.join(" ");
}

// Hightlight button function
function hightlightButton() {
	
	let current = document.getElementsByClassName("active");
    // Removes active from buttons and adds to the selected one
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
}

// Add buttons
function addButtons() {
	
	let buttonContainer = document.getElementById("BtnContainer");
	let buttons = buttonContainer.getElementsByClassName("button");

    // Highlights the selected button
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", hightlightButton);
	}
}

addButtons();