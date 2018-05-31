import { encode, decode } from "punycode";

const btnCC = document.getElementById('btnCC');
const btnAbc = document.getElementById('btnAbc');
const borrarCC = document.getElementById('borrarCC');
const borrarAb = document.getElementById('borrarAb');
const textoCC = document.getElementById('textoCC');
const textoACifrar = document.getElementById('textoACifrar');

btnCC.addEventListener('click', () => {
    let ingresoCC = document.getElementById('ingresoCC').value; 
    console.log(ingresoCC);
    textoCC.innerHTML = encode;
})

btnAbc.addEventListener('click', () => {
    let ingresoACifrar = document.getElementById('ingresoACifrar').value;
    console.log(ingresoACifrar);
    textoACifrar.innerHTML = decode;
});

borrarCC.addEventListener('click', () => {
    let ingresoCC = document.getElementById('ingresoCC').value = "";
});

borrarAb.addEventListener('click', () => {
    let ingresoACifrar = document.getElementById('ingresoACifrar').value = "";
});
