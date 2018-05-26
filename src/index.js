let btnCC = document.getElementById('btnCC');
let btnAbc = document.getElementById('btnAbc');
let borrarCC = document.getElementById('borrarCC') ;
let borrarAb = document.getElementById('borrarAb') ;


btnCC.addEventListener('click', function(){
    let ingresoCC = document.getElementById('ingresoCC').value; 
    console.log(ingresoCC);
});
btnAbc.addEventListener('click', function(){
    let ingresoACifrar = document.getElementById('ingresoACifrar').value;
    console.log(ingresoACifrar);
});

borrarCC.addEventListener('click', function(){
    let ingresoCC = document.getElementById('ingresoCC').value = "";
});

borrarAb.addEventListener('click', function(){
    let ingresoACifrar = document.getElementById('ingresoACifrar').value = "";
});
    