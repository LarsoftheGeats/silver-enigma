const colorButton = document.querySelector("#color");
const placeButton = document.querySelector("#place");
const ritualButton = document.querySelector("#ritual");

function colorButtonPushed(evt){
    evt.preventDefault();
    //console.log("pushed me");//passed
    alert("My favorite color is Blue");
}

function placeButtonPushed(evt){
    evt.preventDefault();
    //console.log("pushed me");//passed
    alert("I love Seattle")
}

function ritualButtonPushed(evt){
    evt.preventDefault();
    //console.log(evt);//passed
    alert("I like Thanksgiving Football.")
}

colorButton.addEventListener("click", colorButtonPushed);
placeButton.addEventListener("click", placeButtonPushed);
ritualButton.addEventListener("click", ritualButtonPushed);
