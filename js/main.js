/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21 */

// save user's name (user input) to a variable
let name = prompt('Inserisci il tuo nome');

// save user's surname (user input) to a variable
let surname = prompt('Inserisci il tuo cognome');

// save user's favourite color (user input) to a variable
let favouriteColor = prompt('Inserisci il tuo colore preferito');

// generate password and parse it in the page
let element = document.getElementById('parse_password');

element.innerHTML = `La password assegnata è: ${name}${surname}${favouriteColor}21`;