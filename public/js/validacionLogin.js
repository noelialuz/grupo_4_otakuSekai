window.addEventListener("load", function () {

    let errores = [];

    let formulario = document.querySelector("form.create-form");

    formulario.addEventListener("submit", (e) => {


        let nombreUsuario = document.querySelector("input.Email");
        if (nombreProducto.value == "") {
            errores.push("El campo Usuario tiene que estar completo");
        } else if (!ValidarEmail(nombreUsuario.value)) {
            errores.push("El campo Usuario no tiene un formato de email válido");
        }

        let password = document.querySelector("input.Password");
        if (password.value == "") {
            errores.push("La contraseña tiene que estar completo");
        }

        document.querySelector("div.erroresValidacion ul").innerHTML = "";
        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector("div.erroresValidacion ul");
            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"

            }


        } else {
            if (errores.length == 0) {
                formulario.submit();
            }
        }

        })
})

function ValidarEmail(email){
    if ('/^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i'.test(email)){
        return true;
       } else {
        return false;
       }
     }
