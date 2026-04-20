function inverti_cifre() {
    // Il numero viene passato come primo argomento dopo il nome del file
    const input = process.argv[2];

    if (!input) {
        console.log("Errore: Inserisci un numero. (Es: node script.js 1234)");
        return;
    }

    const numero = Number(input);

    if (isNaN(numero)) {
        console.log("Errore: L'input non è un numero valido.");
        return;
    }

    // Math.abs per lavorare sul valore assoluto
    // Trasformazione stringa in caratteri
    const stringaInvertita = Math.abs(numero).toString().split('').reverse().join('');
    
    // Riconversione in numero e ripristino del segno originale
    const risultato = Number(stringaInvertita) * Math.sign(numero);
    
    console.log("Numero invertito: " + risultato);
}

inverti_cifre();
