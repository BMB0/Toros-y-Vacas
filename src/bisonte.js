function bisonte (SecretNumber) {
    var bisonte ="";
    
    for(var i = 0; i < 4; i++) {
        var numero = parseInt(SecretNumber[i]);
        if(numero / 2 == 1 || numero / 3 == 1 || numero / 5 == 1 || numero / 7 == 1) {
            bisonte += "%";
        }
    }
    
    return bisonte;
}

export default bisonte;