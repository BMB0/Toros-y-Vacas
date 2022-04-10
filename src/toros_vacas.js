function juego(SecretNumber, GuessNumber) {
  var res = "";
  if(SecretNumber === GuessNumber) {
    res = "!!!!";
  }else{
    if(SecretNumber[0] === GuessNumber[0]){
      res += "!";
    }
    if(SecretNumber[1] === GuessNumber[1]){
      res += "!";
    }
    if(SecretNumber[2] === GuessNumber[2]){
      res += "!";
    }
  }
  return res;
}

export default juego;
