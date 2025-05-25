import {ruswords} from './words.js'
let imageNumber=0
let audio = document.getElementById("audio")
let checkButton = document.getElementById("checkButton")
let image=document.getElementById('image')
let playerInput = document.getElementById("playerInput")
let usedLetters = document.getElementById("usedLetters")
let settings = document.getElementById("settings")
let modal = document.getElementById("modal")
let closeButton = document.getElementById("closeButton")
let word=document.getElementById("word")
let letters = []
let secretWord = ruswords[Math.floor(Math.random()*ruswords.length)].toUpperCase()
word.innerHTML='_'.repeat(secretWord.length)
settings.onclick = function (event){
    event.preventDefault()
    modal.style.display='block'
    audio.play()
}
closeButton.onclick = function (event){
    event.preventDefault()
    modal.style.display='none'
}
checkButton.onclick = function (event) {
    event.preventDefault()
    playerInput.select()
    if (!letters.includes(playerInput.value)){
        letters.push(playerInput.value)
        usedLetters.innerHTML=letters
    }
    console.log(letters);
    if (secretWord.includes(playerInput.value)) {
        console.log("Yes")
        let nextWord=""
        for (let letterNumber = 0; letterNumber < secretWord.length; letterNumber++) {
            if (letters.includes(secretWord[letterNumber])) {
                nextWord=nextWord+secretWord[letterNumber]
            }
            else {
                nextWord=nextWord+'_'
            }
        }
        if(!nextWord.includes("_")){
            image.src='image.png'
            usedLetters.innerHTML="Браво ковбой, сегодня ты остаешься в живых!"
        }
        word.innerHTML=nextWord


    }
    else {
        console.log("No")
        imageNumber+=1
        image.src="hangman"+imageNumber+".png"
        if (imageNumber==6){
            checkButton.disabled=true
            usedLetters.innerHTML="Секретное слово было: "+secretWord
            
        }
    }
}

playerInput.oninput=function(){
    playerInput.value=playerInput.value.toUpperCase()
}