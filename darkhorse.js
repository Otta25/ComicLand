//slider//
let carousel = document.querySelector("#carousel");
let rightChevron = document.querySelector("#right-chevron");
let leftChevron = document.querySelector("#left-chevron");


let catalogoDarkHorse = document.querySelector("#catalogoDarkHorse")
let burger = document.querySelector(".menu-btn");
let estadoBurger = false;
let estadoAside = false;
let asideBar = document.querySelector("#asideBar");
let ruedaConf = document.querySelector("#configuracion img");
burger.addEventListener("click", clickBurger);
burger.addEventListener("click", abrirAside);
ruedaConf.addEventListener("mouseover", girarRueda);
ruedaConf.addEventListener("mouseleave", ruedaDefault);
let fondosSlider = ["slider0.jpg", "slider1.jpg", "slider2.jpg"];


//CONTADORES//
let contadorCarousel = 0;

//slider eventos//

rightChevron.addEventListener("click", cambiarImagen);
leftChevron.addEventListener("click", imagenAnterior);


cargarDarkHorse()

function abrirAside() {
  if (screen.width > 700) {
    abrirAsideDesktop();
  }
  if (screen.width < 700) {
    abrirAsideMobile();
  }
}




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



function cargarCatalogo(Array) {

    for (i = 0; i <= Array.length; i++) {
     catalogoDarkHorse.innerHTML += `
           <div id="card">
           <a href="detalles.html?cargarDetalles=${Array[i].id}"><img id="card-img" src="assets/${Array[i].imagen}"></a>
           <h3>${Array[i].nombre}</h3>
           </div>
          `;
    }
  }


console.log(comics[0].nombre)

function cargarDarkHorse(){
    let editorialValorDarkHorse= 'Dark Horse';
    let comicsDarkHorse=[]
    for(i=0;i<comics.length;i++) {
       if(comics[i].editorial.includes(editorialValorDarkHorse))
       comicsDarkHorse.push(comics[i])
    }
    cargarCatalogo(comicsDarkHorse)
}

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