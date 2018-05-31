window.cipher = {
  encode: (desplazamiento,ingresoCC) => {
    /* Acá va tu código */
  let result = "";
  for (let i = 0; i< ingresoCC.length; i++ ) { //for recorre palabra
    let posicion = ingresoCC.charCodeAt(i);  //pasa de letra a numero
    let ascii = posicion - 65 + desplazamiento % 26 + 65; // aplica formula a la letra
    result += String.fromCharCode(ascii); // pasa de numero a letra
    }
    return result;
  },
  
  decode: (desplazamiento,ingresoACifrar) => {
      /* Acá va tu código */

  }
}