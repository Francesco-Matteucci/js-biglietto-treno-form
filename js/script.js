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
    // Evito l'azione predefinita di un bottone type="submit"
    e.preventDefault();

    //? FASE RACCOLTA DATI
    //* 1 - Chiedere al passeggero il numero di km che vuole percorrere
    const kmNeeded = parseInt(document.getElementById('kmInput').value);
    console.log('Km-request', kmNeeded);

    //* 2 - Chiedere al passeggero l'età
    const age = parseInt(document.getElementById('ageInput').value);
    console.log('Age', age);

    //? FASE DI ELABORAZIONE
    //! validation
    if (isNaN(kmNeeded) || isNaN(age)) {
        alert('Non ha inserito dei numeri sui campi richiesti');
    } else {
        //* Calcolo del prezzo base del biglietto per km
        const baseTicket = kmNeeded * 0.21;
        console.log('Base Ticket', baseTicket);

        //* Calcolo percentuale di sconto se minorenne oppure over 65
        let costumerTicket = baseTicket;
        let discountMessage = '';

        //* se minorenne
        if (age < 18) {
            costumerTicket *= 0.8;
            discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 20% per essere minorenne.';
            //* se over 65
        } else if (age >= 65) {
            costumerTicket *= 0.6;
            discountMessage = 'Congratulazioni! Hai appena ricevuto uno sconto del 40% per essere over 65.';
        }

        //* aggiungo due decimali al prezzo del biglietto, e il valore euro
        costumerTicket = costumerTicket.toFixed(2) + '€';
        console.log('Ticket Price', costumerTicket);

        //? FASE DI OUTPUT

        resultElement.innerHTML = `Grazie per averci scelto! Il prezzo del tuo biglietto è: <strong>${costumerTicket}</strong><br><br>
            <i>${discountMessage}</i>`;
    }

})
