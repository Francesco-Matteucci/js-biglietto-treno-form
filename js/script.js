//? FASE PREPARATORIA
console.log('JS ok');

//* Recupero elementi interessati dal DOM
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result')
const ticketSection = document.getElementById('ticketSection');
const carriageNumberElement = document.getElementById('carriageNumber');
const passengerCodeElement = document.getElementById('passengerCode');

//* Alert di benvenuto
// alert('Benvenuto, ti chiederemo dei dati per creare il tuo biglietto');

//* Gestione dell'evento click sul bottone
calculateButton.addEventListener('click', function (e) {
    e.preventDefault();

    //? FASE RACCOLTA DATI
    //* 1 - Chiedere al passeggero il numero di km che vuole percorrere
    const kmNeeded = parseInt(document.getElementById('kmInput').value);
    console.log('Km-request', kmNeeded);

    //* 2 - Chiedere al passeggero l'età
    const ageCategory = document.getElementById('ageCategory').value;
    console.log('Age Category', ageCategory);

    //? FASE DI ELABORAZIONE
    //! validation
    if (isNaN(kmNeeded) || kmNeeded < 1) {
        alert('Inserisci un numero valido di kilometri');
    } else {
        //* Calcolo del prezzo base del biglietto per km
        const baseTicket = kmNeeded * 0.21;
        console.log('Base Ticket', baseTicket);

        //* Calcolo percentuale di sconto se minorenne oppure over 65
        let costumerTicket = baseTicket;
        let discountMessage = '';

        switch (ageCategory) {
            case 'minorenne':
                costumerTicket *= 0.8;
                discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 20% per essere minorenne.';
                break;
            case 'over65':
                costumerTicket *= 0.6;
                discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 40% per essere over 65.';
                break;
            case 'maggiorenne':
            default:
                // Nessuno sconto per i maggiorenni
                discountMessage = 'Grazie per averci scelto!';
                break;
        }

        //* aggiungo due decimali al prezzo del biglietto, e il valore euro
        costumerTicket = costumerTicket.toFixed(2) + '€';
        console.log('Ticket Price', costumerTicket);

        //? FASE DI OUTPUT

        resultElement.innerHTML = `Il prezzo del tuo biglietto è: <strong>${costumerTicket}</strong><br><br>
            <i>${discountMessage}</i><br>`;

        // Aggiungo nuovo bottone aggiuntivo, a comparsa
        let newButton = document.getElementById('newButton');
        if (newButton) {
            newButton.remove();
        }

        // Creazione dell'oggetto
        newButton = document.createElement('button');
        newButton.id = 'newButton';
        newButton.innerText = 'Acquista ora';
        newButton.style.marginTop = '10px';

        // Aggiungo il bottone al DOM
        resultElement.appendChild(newButton);

        // Aggiungo un evento al nuovo bottone
        newButton.addEventListener('click', function () {
            // Genero un numero di carrozza casuale tra 1 e 20
            const carriageNumber = Math.floor(Math.random() * 20) + 1;
            // Genero un codice passeggero casuale che inizia con 9 e ha 5 cifre
            const passengerCode = '9' + Math.floor(1000 + Math.random() * 9000);

            // Mostro la sezione del biglietto
            ticketSection.style.display = 'block';
            carriageNumberElement.innerText = `Numero Carrozza: ${carriageNumber}`;
            passengerCodeElement.innerText = `Codice Passeggero: ${passengerCode}`;
        })
    }

})
