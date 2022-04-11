function juego(SecretNumber, GuessNumber) {
  var checked = [];
  var res = "";
  var toros = "";
  var vacas = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] === GuessNumber[i]){
      toros += "!";
      checked[i] = 0;
    }else{
      var pos = GuessNumber.search(SecretNumber[i])
      if(pos > -1 && checked[pos] !== 1){
        vacas += "*";
        checked[pos] = 1;
      }
    }
  }
  res = toros + vacas;
  return res;
}

// concatennar primero toros y luego vacas usando dos variables res = toros + vacas (!!**)

export default juego;
