function juego(SecretNumber, GuessNumber) {
  var checked = [];
  var res = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] === GuessNumber[i]){
      res += "!";
      checked[i] = 0;
    }else{
      var pos = GuessNumber.search(SecretNumber[i])
      if(pos > -1 && checked[pos] !== 1){
        res += "*";
        checked[pos] = 1;
      }
    }
  }
  return res;
}
// usar array para saber si ya lo habia encontrado antes
// concatennar primero toros y luego vacas usando dos variables res = toros + vacas (!!**)

export default juego;
