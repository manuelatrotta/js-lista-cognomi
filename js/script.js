alert('hello');
//Chiedi all’utente il cognome
var cognomeUtente = prompt('inserisci il tuo cognome');
console.log(cognomeUtente);
//inseriscilo in un array con altri cognomi
var cognomi = ['cifu', 'belmonte', 'golia', 'trotta', 'sangiovanni', 'sisio', 'maida', 'senatore'];
cognomi.push(cognomeUtente);
console.log(cognomi);
//stampa la lista ordinata alfabeticamente (in html ul > li).
cognomi.sort();
for (var i=0; i<cognomi.length; i++){
  document.getElementById('lista_cognomi').innerHTML += '<li>'+ cognomi[i] + '</li>';
}
//Scrivi anche la posizione della lista in cui il nuovo utente si trova.
var indices = [];
var position = cognomi.indexOf(cognomeUtente) + 1;
console.log(position);
document.getElementById('cognome_utente').innerHTML ='sei in posizione:' + position + 'nella lista';
