function calcola() {
    // process.argv[0]il percorso di node
    // process.argv[1] il percorso del file
    const n1 = Number(process.argv[2]);
    const n2 = Number(process.argv[4]);
    const op = process.argv[3];

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Errore: uno dei valori non é numero.");
        return;
    }

    let risultato;
    switch (op) {
        case "+":  risultato = n1 + n2; break;
        case "-":  risultato = n1 - n2; break;
        case "*":  risultato = n1 * n2; break;
        case "/":  risultato = n2 !== 0 ? n1 / n2 : "Errore: div per 0"; break;
        case "**": risultato = n1 ** n2; break;
        default:   risultato = "Errore: operazione non valida.";
    }

    console.log("Risultato:", risultato);
}

calcola();
