function getPin(){
    const random = Math.random()*10000;
    const pin = (random + "").split(".")[0];
    if (pin.length === 4){
        return pin
    }
    else{
        return getPin
    }
}
//generate pin
function generatePin(){
    const pinInput =document.getElementById("pin");
    pinInput.value = getPin();
}
//handle calculator button
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click" , function(event){
const digit = (event.target.innerText)
if(isNaN(digit)){
    if(digit==="C"){
        const typeInput = document.getElementById("type-pin");
    typeInput.value =""
    }
}
else{
    const typeInput = document.getElementById("type-pin");
    typeInput.value = typeInput.value + digit
}
})
function verifyPin(){
    const pin=document.getElementById("pin").value;
    const type = document.getElementById("type-pin").value;
    if (pin===type){
   document.getElementById("pin-match").style.display ="block";
   document.getElementById("pin-unmatch").style.display ="none"
    }
    else{
        document.getElementById("pin-unmatch").style.display ="block";
        document.getElementById("pin-match").style.display ="none";
    }
}