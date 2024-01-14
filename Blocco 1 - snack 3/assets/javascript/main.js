//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//INITIALISATION OF THE VARIABLES 

const resultHtml = document.getElementById("result")
let sum = 0


for ( let i = 0; i < 10; i++ ){
    const number = parseInt(prompt("inserire un numero;"));
    console.log(sum += number)
}

resultHtml.innerHTML = (`La somma dei numeri insariti è; ${sum}`)



