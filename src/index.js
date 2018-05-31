window.onload = function() {

const btnCC = document.getElementById('btnCC');
const btnAbc = document.getElementById('btnAbc');
const borrarCC = document.getElementById('borrarCC');
const borrarAb = document.getElementById('borrarAb');
const textoCC = document.getElementById('textoCC');
const textoACifrar = document.getElementById('textoACifrar');

// codificado de texto
btnCC.addEventListener('click', () => {
    let ingresoCC = document.getElementById('ingresoCC').value; 
    let desplazamiento = document.getElementById('desplazamiento').value;
    let enlace = window.cipher.encode (desplazamiento,ingresoCC);
    textoCC.innerHTML = enlace;
})

// decodificado de texto
btnAbc.addEventListener('click', () => {
    let ingresoACifrar = document.getElementById('ingresoACifrar').value;
    console.log(ingresoACifrar);
    textoACifrar.innerHTML = decode;
});

// borrado de texto codificado
borrarCC.addEventListener('click', () => {
    let ingresoCC = document.getElementById('ingresoCC').value = "";
});

// borrado de texto decodificado
borrarAb.addEventListener('click', () => {
    let ingresoACifrar = document.getElementById('ingresoACifrar').value = "";
});

}
