let urlDireccion = window.location.href;
let posicionId = urlDireccion.indexOf("=");
let idComic = parseInt(urlDireccion.substring(posicionId + 1));
let contenido = document.querySelector("#contenidoDetalles");
let numeroAzar1 = Math.floor(Math.random() * 20);
let numeroAzar2 = Math.floor(Math.random() * 20);
let numeroAzar3 = Math.floor(Math.random() * 20);

console.log(comics[idComic].nombre);

cargarDetalles();

function cargarDetalles() {
  contenido.innerHTML = `
<img src="assets/${comics[idComic].imagen}" alt="">
        <div id="datosDetalles">
          <h1>${comics[idComic].nombre}</h1>
          <p>${comics[idComic].sinopsis}</p>
          <span>${comics[idComic].editorial}</span>
          <div id="puntuacion">
           <img id="estrellas">
           <h3>Quizas te interese tambien:</h3>
           <div id="quizas">
           <a id="quizasCard1" href="detalles.html?cargarDetalles=${comics[numeroAzar1].id}"><img src="assets/${comics[numeroAzar1].imagen}"></a>
           <a id="quizasCard2" href="detalles.html?cargarDetalles=${comics[numeroAzar2].id}"><img src="assets/${comics[numeroAzar2].imagen}"></a>
           <a id="quizasCard3" href="detalles.html?cargarDetalles=${comics[numeroAzar3].id}"><img src="assets/${comics[numeroAzar3].imagen}"></a>
           </div>
        </div>
        </div>

`;
}



function estrellasPintadas() {
  if (comics[idComic].puntuacion == 1) {
    estrellas.setAttribute("src","assets/estrellas1.svg")
  }
  if (comics[idComic].puntuacion == 2) {
    estrellas.setAttribute( "src","assets/estrellas2.svg")
  }
  if (comics[idComic].puntuacion == 3) {
    estrellas.setAttribute("src","assets/estrellas3.svg")
  }
  if (comics[idComic].puntuacion == 4) {
    estrellas.setAttribute("src","assets/estrellas4.svg")
  }
  if (comics[idComic].puntuacion == 5) {
    estrellas.setAttribute("src","assets/estrellas5.svg")  
  }
}


let estrellas = document.querySelector("#estrellas");

estrellasPintadas();

console.log(estrellas);