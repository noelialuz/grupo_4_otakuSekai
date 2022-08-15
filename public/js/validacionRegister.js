window.addEventListener("load", function () {
    
    /* -------------- Focus en el primer input -------------- */
    let form = document.querySelector('#formRegistro');
    form.formNameRegister.focus()
    

    let formNameRegister = document.querySelector("#formNameRegister")
    let formApellidoRegister = document.querySelector("#formApellidoRegister")
    let formDNIRegister = document.querySelector("#formDNIRegister")
    let formEmailRegister = document.querySelector("#formEmailRegister")
    let formDirectionRegister = document.querySelector("#formDirectionRegister")
    let formCountryRegister = document.querySelector("#Country")
    let formPhoneRegister = document.querySelector("#formPhoneRegister")
    let formBirthdateRegister = document.querySelector("#formBirthdateRegister")
    let formPasswordRegister = document.querySelector("#formPasswordRegister")
    let formPasswordConfirmRegister = document.querySelector("#formPasswordConfirmRegister")
    let formImgRegister = this.document.querySelector("#formImgRegister")

    /* --------------------------- VALIDACION EN TIEMPO REAL --------------------------- */
    /* -------------- INPUT NAME -------------- */
    formNameRegister.addEventListener("blur", function(){
        let advertencia = document.querySelector("#nameRegister")
        if (formNameRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El nombre no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else{
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formApellidoRegister.focus()
        }
    })


    /* --------------------------- VALIDACIONES AL APRETAR ENVIAR --------------------------- */
    form.addEventListener("submit", function(evento){

        /* --------------------- VALIDACIONES DE ERRORES --------------------- */
        let errores = [];
        /* -------------- INPUT NAME -------------- */
                
            if(formNameRegister.value == ""){
                errores.push("El nombre no puede estar vacío");
                formNameRegister.classList.remove("is-valid");
                formNameRegister.classList.add("is-invalid");
            }
            else{
                formNameRegister.classList.remove("is-invalid");
                formNameRegister.classList.add("is-valid");
            }
        

    /* -------------- VALIDACION FINAL -------------- */
    if(errores.length >0){
        evento.preventDefault();
        let ulErrores = document.querySelector(".errores");
        ulErrores.classList.add("alert-warning");
        ulErrores.innerHTML = "";
        for(error of errores){
            ulErrores.innerHTML += "<li>" + error + "</li>"
        }
    } 
    
    else{
        /* evento.preventDefault(); */
        let ulErrores = document.querySelector(".errores");
        ulErrores.classList.add("alert-complete")
        ulErrores.innerHTML = "El usuario se guardó satisfactoriamente";
        evento.submit()
    }
    
    })
    /* let errores = [];
    if (formNameRegister.value == "") {
        errores.push("El campo Nombre no puede estar vacío");
    } else if (formNameRegister.length < 2) {
        errores.push("El campo Nombre debe tener al menos 2 caracteres")
    }

    if (formApellidoRegister.value == "") {
        errores.push("El campo Apellido no puede estar vacío");
    } else if (formApellidoRegister.length < 2) {
        errores.push("El campo Apellido debe tener al menos 2 caracteres")
    }

    if (formEmailRegister.value == "") {
        errores.push("El campo Email no puede estar vacío");
    } else if (formEmailRegister.length < 2) {
        errores.push("El campo Nombre debe tener al menos 2 caracteres")
    } */
  });
  