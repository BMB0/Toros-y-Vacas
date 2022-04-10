function juego(SecretNumber, GuessNumber) {
  var res = "";
  if(SecretNumber[0] === GuessNumber[0]){
    res += "!";
  }else{
    if(GuessNumber.search(SecretNumber[0]) > -1){
      res += "*";
    }
  }
  if(SecretNumber[1] === GuessNumber[1]){
    res += "!";
  }else{
    if(GuessNumber.search(SecretNumber[1]) > -1){
      res += "*";
    }
  }
  if(SecretNumber[2] === GuessNumber[2]){
    res += "!";
  }
  if(SecretNumber[3] === GuessNumber[3]){
    res += "!";
  }
  return res;
}

export default juego;
