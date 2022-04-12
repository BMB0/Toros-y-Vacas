function bisonte (SecretNumber) {
    var bisonte ="";
    var numero = parseInt(SecretNumber[0]);
    if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
        bisonte = "%";
    }
    var numero = parseInt(SecretNumber[1]);
    if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
        bisonte = "%";
    }
    return bisonte;
}

export default bisonte;