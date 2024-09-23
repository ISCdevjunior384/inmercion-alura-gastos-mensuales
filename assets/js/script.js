let listaNombresGastos = [];
let listaValoresGastos = [];

//esta funcion se invoca al momentode que el usuario hace click en el boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    

listaNombresGastos.push(nombreGasto);
listaValoresGastos.push(valorGasto);

console.log(listaNombresGastos);
console.log(listaValoresGastos);

    //alert('click de usuario');

    actualizarListaGastos();


    if (valorGasto <= 50){
      alert("el gasto a realizar no cumple el presupuesto solicitado   ");
      }
      else if (valorGasto <=120){
          alert("los gastos estan normalizados con tu presupuesto");
          
      }
      if (valorGasto >=180){
        alert("el gasto es aplicable solo si no sobre pasa a $200 "); 
        }
        else if (valorGasto >=250){
          alert("has sobrepasado el presupuesto");
        }





}
function actualizarListaGastos (){

  const listaElementos = document.getElementById('listaDeGastos');
  const totalElementos = document.getElementById('totalGastos');

let htmlLista ='';
let totalGastos = 0;
listaNombresGastos.forEach((elemento, posicion) => {
    const valorGasto = Number(listaValoresGastos[posicion]);

  htmlLista += `<li>${elemento} -USD ${valorGasto.toFixed(2)} 
    <button  onclick="eliminarGasto(${posicion});">Eliminar</button>
  
  
  </li>`;

totalGastos += Number(valorGasto);



});

listaElementos.innerHTML = htmlLista;
totalElementos.innerHTML = totalGastos.toFixed(2);
limpiar();

}
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';

}

function eliminarGasto(posicion){


listaNombresGastos.splice(posicion, 1);
listaValoresGastos.splice(posicion, 1);

actualizarListaGastos();



}

