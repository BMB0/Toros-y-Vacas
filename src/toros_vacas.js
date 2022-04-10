function juego(SecretNumber, GuessNumber) {
  var res = "";
  if(SecretNumber === GuessNumber) {
    res = "!!!!";
  }else{
    if(SecretNumber[0] === GuessNumber[0]){
      res += "!";
    }
  }
  return res;
}

export default juego;
