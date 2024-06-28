const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	
	if (mySrc === "images/pencil.jpg") {
		myImage.setAttribute("src", "images/firefox-logo.jpg");
	}
	else {
		myImage.setAttribute("src", "images/pencil.jpg");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	while (!myName) {
		myName = prompt("Please enter your name.");
	}
	localStorage.setItem("name", myName);
	
	if (myName == "Giorgio") {
		myHeading.textContent = `Goodbye, George!`;
	}
	else {
		myHeading.textContent = `Hello, ${myName}`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	if (storedName == "Giorgio") {
		myHeading.textContent = `Goodbye, George!`;
	}
	else {
		myHeading.textContent = `Hello, ${storedName}`;
	}
}

myButton.onclick = () => {
	setUserName();
}