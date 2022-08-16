window.addEventListener("load", function () {
  const extensionesValidas = ".png, .gif, .jpeg, .jpg";

 let errores = [];

  let formulario = document.querySelector("form.create-form");

  formulario.addEventListener("submit", (e) => {


    let nombreProducto = document.querySelector("input.nombreProducto");
    if (nombreProducto.value == "") {
      errores.push("El Campo de Nombre tiene que estar completo");
    } else if (nombreProducto.value.length < 5) {
        errores.push("El Campo de Nombre tiene que tener mas de 5 caracteres");
    }
    let descripcion = document.querySelector("input.descripcionProducto");
    if (descripcion.value == "") {
        errores.push("El Campo de descripcion tiene que estar completo");
    } else if (descripcion.value.length < 20) {
        errores.push("El Campo de descripcion tiene que tener mas de 20 caracteres");
    }

   document.querySelector("div.erroresValidacion ul").innerHTML = "";
   if (errores.length > 0){
      e.preventDefault();

     let ulErrores = document.querySelector("div.erroresValidacion ul");
      for (let i = 0; i < errores.length; i++) {

          ulErrores.innerHTML += "<li>" +errores[i] + "</li>"

      }


  } else {
if

  (errores.length == 0) {
    formulario.submit();
}
 
}
 

  errores = []
  });

});