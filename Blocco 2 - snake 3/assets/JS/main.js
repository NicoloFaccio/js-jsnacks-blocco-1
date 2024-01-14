//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [12, 27, 33, 42, 55, 61];

let sum = 0

for (let i = 0; i < numbers.length; i++){
    if (i % 2 !== 0){
        console.log(sum += numbers[i])
    }
}

document.writeln(`La somma dei numeri in posizione dispari è: 
${sum}`)