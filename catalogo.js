

let paginaDetalles = document.querySelector("#detallesContenedor");
let contenidoPag = document.querySelector("#contenido");
let buscador = document.querySelector("#buscadorInput");

buscador.addEventListener("keyup", buscarComics);
buscador.addEventListener("click", cambiarTamaño);
cargarCatalogo(comics);


function cargarCatalogo(Array) {
  contenidoPag.style.display = "grid";
  for (i = 0; i <= Array.length; i++) {
    contenidoPag.innerHTML += `
         <div id="card">
         <a href="detalles.html?cargarDetalles=${Array[i].id}"><img id="card-img" src="assets/${Array[i].imagen}"></a>
         <h3>${Array[i].nombre}</h3>
         </div>
        `;
  }
}



// --------------------------------------------------- buscar //

function buscarComics(){
  contenidoPag.innerHTML = ""
  let textoBusqueda = buscador.value;
  console.log(textoBusqueda);
  let comicsFiltrados = [];
  for(let i=0; i<=comics.length-1;i++){
      if(comics[i].nombre.toLowerCase().includes(textoBusqueda.toLowerCase()))
      {
        comicsFiltrados.push(comics[i])
          console.log(comicsFiltrados)
      }
  }
  cargarCatalogo(comicsFiltrados)
}



function cambiarTamaño(){
  buscador.style.width='20vw';
  buscador.style.backgroundImage='none';
}