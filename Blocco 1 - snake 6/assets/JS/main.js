//Blocco 1 - snake 6 -Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

//INITIALISATION OF THE VARIABLES
const numberRandomHtml = parseInt(prompt("Inserire un numero; ", 4)); 
const resultHmtl = document.getElementById("result");

//CREATION OF THE FUNCTIONS 
for (let i = 0; i < numberRandomHtml; i++) {
    let cube = Math.pow(i , 3)
    console.log(cube)
    resultHmtl.innerHTML = (`Ecco il cubo del numero inserito; ${cube}`)
}

