//change log.  Added alert to function handleSubmit.  Commented out console.log

console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("The Form was submitted Successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//2nd half of edit javascript

const catImage = document.querySelector("img");

function handleMouseover(evt){
	evt.preventDefault();
	alert("That was kind of you to give me a mouse.");
	//console.log("mouseover");
}

catImage.addEventListener("mouseover", handleMouseover);  