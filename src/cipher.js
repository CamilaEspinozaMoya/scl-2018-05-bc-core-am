window.cipher = {
  encode: (desplazamiento,ingresoCC) => {
    /* Acá va tu código */
  let result = [];
  for (let i = 0; i< ingresoCC.length; i++ ) { //for recorre palabra
    let posicion = ingresoCC.charCodeAt(i);  //pasa de letra a numero
    let ascii = ((posicion - 65 + parseInt(desplazamiento)) % 26 + 65); // aplica formula a la letra
    result += String.fromCharCode(ascii); // pasa de numero a letra
    }
    return result;
  },
  decode: (desplazamiento,ingresoACifrar) => {
      /* Acá va tu código */
  let result2 = [];
  for (let e = 0; e< ingresoACifrar.length; e++) {
    let posicion2 = ingresoACifrar.charCodeAt(e);
    let ascii2 = ((posicion2 + 65 - parseInt(desplazamiento)) % 26 + 65);
    result2 += String.fromCharCode(ascii2);
  }
    return result2;
  }
}