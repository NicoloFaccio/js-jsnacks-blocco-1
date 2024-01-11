//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//INITIALISATION OF THE VARIABLES 

const matNumberFirst = prompt("Inserire il numero desiderato:");
const matNumberSecond = prompt("Inserire il numero desiderato:");
const matNumberThird = prompt("Inserire il numero desiderato:");
const matNumberFourth = prompt("Inserire il numero desiderato:");
const matNumberFifth = prompt("Inserire il numero desiderato:");
const matNumberSixth = prompt("Inserire il numero desiderato:");
const matNumberSeventh = prompt("Inserire il numero desiderato:");
const matNumberEigth = prompt("Inserire il numero desiderato:");
const matNumberNinth = prompt("Inserire il numero desiderato:");
const matNumberTenth = prompt("Inserire il numero desiderato:");

const resultHtml = document.getElementById("result")

console.log(
    matNumberFirst, 
    matNumberSecond, 
    matNumberThird, 
    matNumberFourth, 
    matNumberFifth,
    matNumberSixth, 
    matNumberSeventh, 
    matNumberEigth, 
    matNumberNinth, 
    matNumberTenth
)
resultHtml.innerHTML = (`<p>il risultato della somma è: 
${( matNumberFirst + matNumberSecond + matNumberThird + matNumberFourth + matNumberFifth + matNumberSixth + matNumberSeventh + matNumberEigth + matNumberNinth + matNumberTenth)} </p>`)



