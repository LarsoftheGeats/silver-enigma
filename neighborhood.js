const restaurantButton=document.querySelector("#rest-Button");
const restList =["Sensuous Sandwich", "Mountain Mikes", "Tucanos","Restaurant Chain of the Day", "Two Jack's Pizza"];

function restaurantButtonPush(evt){
    evt.preventDefault();
    //console.log(evt);//test, passed
    const listSize=restList.length;
    let  randIndex=Math.floor(Math.random()*listSize);
    //console.log(restList[randIndex])//test passed
    const displayText=document.querySelector("#rest-recco");
    displayText.textContent="Your reccommended restaurant is "+restList[randIndex];

}

restaurantButton.addEventListener("click", restaurantButtonPush);