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

})
