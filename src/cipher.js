window.cipher = {
  encode: (desplazamiento,ingresoCC) => {
    /* Acá va tu código */
  let result = "";
  for (let i = 0; i< ingresoCC.length; i++ ) {
    let posicion = ingresoCC.charCodeAt(i);
    let ascii = posicion - 65 + desplazamiento % 26 + 65;
    result += String.fromCharCode(ascii);
    }
    return result;
  },
  
  decode: () => {
      /* Acá va tu código */
  }
}