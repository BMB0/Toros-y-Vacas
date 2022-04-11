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
    var pos = buscarPosicionDelNumero(SecretNumber[i], GuessNumber);    // pos = -1 si no se encuentra el numero en la cadena
    if(pos > -1 && checked[pos] == null){
      vacas += "*";
      checked[pos] = 1;
    }
  }
  return vacas;
}

function buscarPosicionDelNumero(numero, cadena){
  var pos = cadena.search(numero);
  return pos;
}

export default juego;
