let ListadeAmigos=[];

function agregarAmigo(){
    let imputAmigo =document.getElementById("amigo");
    let amigo=imputAmigo.value;

    if(amigo ===""){
        alert("Porfavor ESCRIBE el NOMBRE DE UN AMIGO !!!");
        return;
    }
    ListadeAmigos.push(amigo);
    console.log(ListadeAmigos) ;
}
