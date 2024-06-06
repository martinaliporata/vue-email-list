Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


Creiamo nei data  un array vuoto all'interno dei data dove poi verranno pushate le nuove mail
Nei methods creaiamo una funzione all'interno del quale ci sarà un ciclo for (ripetere per 10 volte)
Questo metodo esegue una richiesta HTTP GET a un'API che restituisce un'email casuale.
Eseguiamo poi l'arrow function che inizierà per .then((response) => { ... })
Per estrarre le email dall'API dobbiamo scrivere response.data.response
E infine pushare le email estratte nel nuovo array