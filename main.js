// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);
var valeta, valkm , valnome;

// input utente età
var nomeUtente = document.getElementById('nome');

// input km che l'utente vuole percorrere
var kmUtente = document.getElementById('km');

// input utente età
var etaUtente = document.getElementById('eta');

// Bottone Genera
var generaBottone = document.getElementById('genera');

// Bottone Annulla
var annullaBottone = document.getElementById('annulla')

//
// Per fare scomparire il risultato

var cancellarisult = document.getElementById('scompari')

// console.log("età utente:" + etaUtente);
// console.log("km percorsi:" + kmPercUtente);
// console.log("costo biglietto normale:" + costoBigliettoNormale);
// console.log("costo biglietto piccoli:" + costoBigliettoBaby);
// console.log("costo biglietto grandi:" + costoBigliettoSaggi);


// Catturo il click sul bottone
generaBottone.addEventListener("click",


function(){

  valnome = nomeUtente.value;
  valkm = kmUtente.value;
  valeta = etaUtente.value;
  cancellarisult.style.display = "block";
  // Costo biglietto normale 0.21€ al km
  var costoBigliettoNormale = 0.21 * valkm;

  // Costo biglietto + sconto minorenni
  var costoBigliettoBaby = ( costoBigliettoNormale * 80 ) / 100;

  // // Costo biglietto + sconto terzaetà
  var costoBigliettoSaggi = ( costoBigliettoNormale * 60 ) / 100;

 var prezzoDefinitivo;
 var categoria = "standard" ;


  if ( valeta == "optuno" ) {
  prezzoDefinitivo = costoBigliettoBaby;
  prezzoDefinitivo = "minorenni";
}else if (valeta == "optdue" ){
  prezzoDefinitivo = costoBigliettoSaggi;
  categoria = "Saggi";
} else {
  prezzoDefinitivo = costoBigliettoNormale;


}
console.log(valnome,valkm,valeta,categoria,prezzoDefinitivo);
document.getElementById("numerocarrozza").innerHTML = Math.floor(Math.random()*10)+1;
document.getElementById("nomepass").innerHTML = nomeUtente.value;
document.getElementById("costoviaggio").innerHTML = Math.floor(prezzoDefinitivo);
document.getElementById("categoria").innerHTML = categoria;
}



)

annullaBottone.addEventListener("click",

function () {

  nomeUtente.value = "" ;
  kmUtente.value = "" ;
  etaUtente.value = "" ;

  cancellarisult.style.display = "none";
}

)
