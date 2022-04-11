function juego(SecretNumber, GuessNumber) {
  var res = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] === GuessNumber[i]){
      res += "!";
    }else{
      if(GuessNumber.search(SecretNumber[i]) > -1){
        res += "*";
      }
    }
  }
  return res;
}


export default juego;
