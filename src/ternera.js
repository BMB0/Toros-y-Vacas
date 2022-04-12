function ternera(SecretNumber, GuessNumber){
    var terneras = "";
    for(var i = 0; i < 4; i++) {
      if(SecretNumber.search(toString(parseInt(GuessNumber[i]) - 1)) > 0){
        terneras += "#";
      }
    }
    return terneras;
  }

  export default ternera;