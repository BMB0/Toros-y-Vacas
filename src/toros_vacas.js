function juego(SecretNumber, GuessNumber) {
  var res = "";
  if(SecretNumber === GuessNumber) {
    res = "!!!!";
  }
  return res;
}

export default juego;
