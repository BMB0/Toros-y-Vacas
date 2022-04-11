function juego(SecretNumber, GuessNumber) {
  var checked = [];
  var toros = torosSearch(checked, SecretNumber, GuessNumber);
  var vacas = vacasSearch(checked, SecretNumber, GuessNumber);
  var res = toros + vacas;
  return res;
}

function torosSearch(checked, SecretNumber, GuessNumber){
  var toros = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] === GuessNumber[i]){
      toros += "!";
      checked[i] = 0;
    }
  }
  return toros;
}

function vacasSearch(checked, SecretNumber, GuessNumber){
  var vacas = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] !== GuessNumber[i]){
      var pos = GuessNumber.search(SecretNumber[i])
      if(pos > -1 && checked[pos] == null){
        vacas += "*";
        checked[pos] = 1;
      }
    }
  }
  return vacas;
}

export default juego;
