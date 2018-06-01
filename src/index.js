window.onload = function() {

const btnCC = document.getElementById('btnCC');
const btnAbc = document.getElementById('btnAbc');
const borrarCC = document.getElementById('borrarCC');
const borrarAb = document.getElementById('borrarAb');
const textoCC = document.getElementById('textoCC');
const textoACifrar = document.getElementById('textoACifrar');

// codificado de texto
btnCC.addEventListener('click', () => {
    let ingresoCC = document.getElementById('ingresoCC').value.toUpperCase();
    console.log(ingresoCC);
    let desplazamiento = document.getElementById('desplazamiento').value;
    console.log(desplazamiento);
    let enlaceCC = window.cipher.encode (ingresoCC,desplazamiento);
    console.log(enlaceCC);
    textoCC.innerHTML = enlaceCC;
})

// decodificado de texto
btnAbc.addEventListener('click', () => {
    let ingresoACifrar = document.getElementById('ingresoACifrar').value.toUpperCase();
    console.log(ingresoACifrar);
    let desplazamiento = document.getElementById('desplazamiento').value;
    console.log(desplazamiento);
    let enlaceAb = window.cipher.decode (ingresoACifrar,desplazamiento);
    textoACifrar.innerHTML = enlaceAb;
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
