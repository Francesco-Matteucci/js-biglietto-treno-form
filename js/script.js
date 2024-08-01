//? FASE PREPARATORIA
console.log('JS ok');

//* Recupero elementi interessati dal DOM
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result')
console.log('Click', calculateButton);

//* Alert di benvenuto
alert('Benvenuto, ti chiederemo dei dati per creare il tuo biglietto');

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
    if (isNaN(kmNeeded) || kmNeeded < 0) {
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
            <i>${discountMessage}</i>`;
    }

})
