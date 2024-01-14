//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nameHtml = ["Luca", "Paolo", "Marco", "Laura", "Veronica"];
const surname = ["Verdi", "Rossi", "Gialli", "Blue", "Violet"];
const mix = [];

for (let i = 0; i < nameHtml.length; i++){
mix.push( nameHtml[i] + " " + surname[i] )
}

console.log(mix)