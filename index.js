//slider//
let carousel = document.querySelector("#carousel");
let rightChevron = document.querySelector("#right-chevron");
let leftChevron = document.querySelector("#left-chevron");

//aside//
let burger = document.querySelector(".menu-btn");
let estadoBurger = false;
let estadoAside = false;
let asideBar = document.querySelector("#asideBar");
let ruedaConf = document.querySelector("#configuracion img");
let marvel = document.querySelector("#marvel-list");

//recomendados//
let recomendadosContainer = document.querySelector("#recomendados");
let irIzquierda = document.querySelector("#irIzquierda");
let irDerecha = document.querySelector("#irDerecha");

//recomendados 2//
let obras = document.querySelector("#obras");
let imagenRecomendados1 = document.querySelector("#img-obras1");
let imagenRecomendados2 = document.querySelector("#img-obras2");
let imagenRecomendados3 = document.querySelector("#img-obras3");
let h2 = document.querySelector("h2");

let fecha = new Date();
let dia = fecha.getDay();

//array slider//

let fondosSlider = ["slider0.jpg", "slider1.jpg", "slider2.jpg"];

//CONTADORES//
let contadorCarousel = 0;

//EVENTOS//

//aside eventos//
burger.addEventListener("click", clickBurger);
burger.addEventListener("click", abrirAside);
ruedaConf.addEventListener("mouseover", girarRueda);
ruedaConf.addEventListener("mouseleave", ruedaDefault);

//slider eventos//

rightChevron.addEventListener("click", cambiarImagen);
leftChevron.addEventListener("click", imagenAnterior);

//recomendados eventos//
function abrirAside() {
  if (screen.width > 700) {
    abrirAsideDesktop();
  }
  if (screen.width < 700) {
    abrirAsideMobile();
  }
}

//eventos recomendados 2//

//funciones aside//

function clickBurger() {
  if (!estadoBurger) {
    burger.classList.add("abierto");
    estadoBurger = true;
  } else {
    burger.classList.remove("abierto");
    estadoBurger = false;
  }
}

function abrirAsideDesktop() {
  if (!estadoAside) {
    asideBar.style.left = "0vw";
    asideBar.style.backgroundColor = "#06043d";
    asideBar.style.boxShadow = "10px 20px 30px black";
    estadoAside = true;
  } else {
    asideBar.style.left = "-16vw";
    asideBar.style.backgroundColor = "transparent";
    asideBar.style.boxShadow = "none";
    estadoAside = false;
  }
}

function abrirAsideMobile() {
  if (!estadoAside) {
    asideBar.style.left = "0vw";
    asideBar.style.backgroundColor = "#06043d";
    asideBar.style.boxShadow = "10px 20px 30px black";
    estadoAside = true;
  } else {
    asideBar.style.left = "-35vw";
    asideBar.style.backgroundColor = "transparent";
    asideBar.style.boxShadow = "none";
    estadoAside = false;
  }
}

function girarRueda() {
  ruedaConf.style.transform = "rotate(80deg)";
}

function ruedaDefault() {
  ruedaConf.style.transform = "rotate(0deg)";
}

//-----------------------------------------------------------------------------------------------------------//

//funciones slider//
function cambiarImagen() {
  contadorCarousel++;
  if (contadorCarousel > 2) {
    contadorCarousel = 0;
  }
  carousel.style.backgroundImage = `url(assets/${fondosSlider[contadorCarousel]})`;
}

function imagenAnterior() {
  contadorCarousel--;
  if (contadorCarousel < 0) {
    contadorCarousel = 2;
  }
  carousel.style.backgroundImage = `url(assets/${fondosSlider[contadorCarousel]})`;
}

setInterval(cambiarImagen, 7000);

function agregarRecomendados() {
  for (i = 0; i <= comics.length; i++) {
    let numero = Math.floor(Math.random() * 20);
    recomendadosContainer.innerHTML += `
         <div id="card">
         <img id="card-img" src="assets/${comics[numero].imagen}">
         </div>
        `;
  }
}


function scrollDerecha() {
  recomendadosContainer.scrollLeft += 1;
}

setInterval(scrollDerecha, 10);

agregarRecomendados();

//funciones recomendados 2 //

function agregarRecomendados2() {
  let numero = Math.floor(Math.random() * 20);
  obras.innerHTML += `
      <img id="img-obras1" src="assets/comic${numero}.jpg" alt="">
      `;
}
function agregarRecomendados3() {
  let numero = Math.floor(Math.random() * 20);
  obras.innerHTML += `
      <img id="img-obras2" src="assets/comic${numero}.jpg" alt="">
      `;
}
function agregarRecomendados4() {
  let numero = Math.floor(Math.random() * 10);
  obras.innerHTML += `
      <img id="img-obras3" src="assets/comic${numero}.jpg" alt="">
      `;
}

//

agregarRecomendados2();
agregarRecomendados3();
agregarRecomendados4();




// -----------------------------------------------------------//
