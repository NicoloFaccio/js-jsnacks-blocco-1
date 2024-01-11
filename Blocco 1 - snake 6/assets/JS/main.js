//Blocco 1 - snake 6 -Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

//INITIALISATION OF THE VARIABLES
const numberRandomHtml = document.getElementById("numberRandom")
const buttonSubmit = document.getElementById("btn-submit")
const resultHmtl = document.getElementById("result")

//CREATION OF THE FUNCTIONS 

buttonSubmit.addEventListener("click", function(){
    console.log(numberRandomHtml.value)
    resultHmtl.innerHTML = Math.pow(numberRandomHtml, 2);
})

