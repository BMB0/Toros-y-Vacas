function juego(SecretNumber, GuessNumber) {
  var checkedToros = [];
  var checkedVacas = [];
  var toros = torosSearch(checkedToros, SecretNumber, GuessNumber);
  var vacas = vacasSearch(checkedVacas, checkedToros, SecretNumber, GuessNumber);
  var res = toros + vacas;
  return res;
}

function torosSearch(checkedToros, SecretNumber, GuessNumber){
  var toros = "";
  for(var i = 0; i < 4; i++) {
    if(SecretNumber[i] === GuessNumber[i]){
      toros += "!";
      checkedToros[i] = 1;
    }
  }
  return toros;
}

function vacasSearch(checkedVacas, checkedToros, SecretNumber, GuessNumber){
  var vacas = "";
  for(var i = 0; i < 4; i++) {
    var pos = buscarPosicionDelNumero( GuessNumber[i], SecretNumber, checkedToros, checkedVacas, i);    // pos = -1 si no se encuentra el numero en la cadena
    if(pos > -1 && checkedVacas[pos] == null ){
      vacas += "*";
      checkedVacas[pos] = 1;
    }
  }
  return vacas;
}

function buscarPosicionDelNumero(numero, cadena, checkedToros, checkedVacas, posicion){
  var pos = -1;
  for(var i = 0; i < 4; i++) {
    if(cadena[i] == numero && checkedToros[posicion] == null && checkedVacas[i] == null){
      pos = i;
    }
  }
  return pos;
}

export default juego;
