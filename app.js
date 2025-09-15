let ListadeAmigos = []; //arreglo de los  nombres
let conteo = 0;        // su nombre  lo dice

console.log(conteo);
console.log (ListadeAmigos);

function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === ""){
      alert("ESCRIBE UN NOMBRE!!!");
      return ;
    }
    else{
      ListadeAmigos.push(nombreAmigo);                //almacenando el nombre en la lista
      console.log (ListadeAmigos);
      conteo++;
      console.log(conteo);
      asignarTextoElemento('ul',`Amigo número ${conteo} ${nombreAmigo}`);//muestra debajo de la caja de texto  el numero y  nombre asigando 
      limpiarcaja();
      if(conteo == 4){
          asignarTextoElemento('h2',"PULSA EL BOTON SORTEAR AMIGO");
        }
    }

}

function limpiarcaja(){
  let valorcaja= document.getElementById('amigo');
  valorcaja.value='';
}

function sortearAmigo()
{
  let num = Math.floor(Math.random()*3)+1;    //Generamos un numero aleatorio para sortear el nombre del amigo secreto
  console.log(num);
  num --;
  console.log(ListadeAmigos[num]);   // Muestra el nombre del amigo 
  let amigosecreto = ListadeAmigos[num];
  asignarTextoElemento('h2',`El Amigo(a) secreto es: ${amigosecreto}`);// cambia el texto del encabezado2 con el nombre sorteado

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}