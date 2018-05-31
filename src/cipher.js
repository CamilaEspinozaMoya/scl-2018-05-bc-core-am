window.cipher = {
  encode: (ingresoCC,desplazamiento) => {
    /* Acá va tu código */
  let result = "";
  for (let i = 0; i < ingresoCC.length; i++ ) { //for recorre palabra
    //let posicion = ingresoCC.charCodeAt(i);  //pasa de letra a numero
    let ascii = ((ingresoCC.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65); // aplica formula a la letra
    result += String.fromCharCode(ascii); // pasa de numero a letra
    }
    return result;
  },
  decode: (ingresoACifrar,desplazamiento) => {
      /* Acá va tu código */
  let result2 = "";
  for (let i = 0; i < ingresoACifrar.length; i++) {
  //  let posicion2 = ingresoACifrar.charCodeAt(i);
    let ascii2 = ((ingresoACifrar.charCodeAt(i) + 65 - parseInt(desplazamiento)) % 26 + 65);
    result2 += String.fromCharCode(ascii2);
  }
    return result2;
  }
}