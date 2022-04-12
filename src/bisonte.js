function bisonte (SecretNumber) {
    var bisonte ="";
    var numero = parseInt(SecretNumber[0]);
    if(numero / 2 == 1 || numero / 3 == 1 || numero / 5 == 1 || numero / 7 == 1) {
        bisonte += "%";
    }
    var numero = parseInt(SecretNumber[1]);
    if(numero / 2 == 1 || numero / 3 == 1 || numero % 5 == 1 || numero / 7 == 1) {
        bisonte += "%";
    }
    var numero = parseInt(SecretNumber[2]);
    if(numero / 2 == 1 || numero / 3 == 1 || numero % 5 == 1 || numero / 7 == 1) {
        bisonte += "%";
    }
    return bisonte;
}

export default bisonte;