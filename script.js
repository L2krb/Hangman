let checkButton=document.getElementById("checkButton")
let playerInput=document.getElementById("playerInput")
let secretWord='Kirill'
checkButton.onclick=function(){
if (secretWord.includes(playerInput.value)){
    console.log("Yes")
    for (let letterNumber=0; letterNumber<secretWord.length;letterNumber++){
        if (playerInput.value==secretWord[letterNumber]){
            console.log(playerInput.value)
        }
    }
}
else{
    console.log("No")
}
}
