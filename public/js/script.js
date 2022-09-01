/* ---------------------------- BARRA DE BÚSQUEDA ----------- */
function busqueda(){
  let barraInput = document.querySelector("#barraDeBusqueda")
  barraInput.classList.toggle("mostrarBarra")
  document.querySelector(".barraDeBusqueda").focus()
}
function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}
