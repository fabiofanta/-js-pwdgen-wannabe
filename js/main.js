var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo cognome?");
var favouriteColor = prompt("Qual è il tuo colore preferito?");
var date = new Date();
var year = date.getFullYear();
// document.getElementById('text').innerHTML = name + surname + favouriteColor + 20;
// document.getElementById('text').innerHTML = name + surname + favouriteColor + year;
// document.getElementById('text').innerHTML = name + ";" + surname + ";" + favouriteColor + ";" + year;
document.getElementById('text').innerHTML = name + ";" + surname + ";" + favouriteColor + ";" + (year - 2000);
