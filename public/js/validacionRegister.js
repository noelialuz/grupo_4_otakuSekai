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
    formNameRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#nameRegister")
        if (formNameRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El nombre no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (formNameRegister.length < 2) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El nombre debe tener al menos 2 caracteres</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formApellidoRegister.focus()
        }
    })



    /* -------------- INPUT APELLIDO -------------- */
    formApellidoRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#apellidoRegister")
        if (formApellidoRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El apellido no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (formApellidoRegister.length < 2) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El apellido debe tener al menos 2 caracteres</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formDNIRegister.focus()
        }
    })


    /* -------------- INPUT DNI -------------- */
    formDNIRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#dniRegister")
        if (formDNIRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El DNI no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (formDNIRegister.length < 8) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El DNI debe tener la siguiente estructura xx.xxx.xxx</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formEmailRegister.focus()
        }
    })



    /* FALTA AGREGAR: No puede repetirse con los e-mails ya registrados. */
    formEmailRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#emailRegister")
        if (formEmailRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El email no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formEmailRegister.value)) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El email debe ser del tipo: ejemplo@mail.com</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formDirectionRegister.focus()
        }
    })

    /* -------------- INPUT DIRECTION -------------- */
    formDirectionRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#directionRegister")
        if (formDirectionRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La dirección no puede estar vacía</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (formDirectionRegister.length < 5) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La dirección debe tener al menos 5 caracteres</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            Country.focus()
        }
    })

    /* -------------- INPUT COUNTRY -------------- */
    formCountryRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#countryRegister")
        if (formDirectionRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El país no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formPhoneRegister.focus()
        }
    })

    /* -------------- INPUT PHONE -------------- */
    formPhoneRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#phoneRegister")
        if (formPhoneRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>El número de celular no puede estar vacío</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formBirthdateRegister.focus()
        }
    })


    /* -------------- INPUT BIRTHDATE -------------- */
    formBirthdateRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#birthdateRegister")
        if (formBirthdateRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La fecha de cumpleaños no puede estar vacía</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formPasswordRegister.focus()
        }
    })


    /* -------------- INPUT PASSWORD -------------- */
    formPasswordRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#passwordRegister")
        if (formPasswordRegister.value == "") {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La contraseña no puede estar vacía</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        } else if (formPasswordRegister.length < 8) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La contraseña debe tener al menos 8 caracteres</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formPasswordConfirmRegister.focus()
        }
    })

    /* -------------- INPUT PASSWORD -------------- */
    formPasswordConfirmRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#passwordRegister");
        if (formPasswordConfirmRegister.value !== formPasswordRegister.value) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>Las contraseñas deben coincidir</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
            formImgRegister.focus()
        }
    })

    /* -------------- INPUT IMAGE -------------- */
    formImgRegister.addEventListener("blur", function () {
        let advertencia = document.querySelector("#passwordRegister")
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if (!allowedExtensions.exec(formImgRegister.value)) {
            advertencia.innerHTML = "";
            advertencia.innerHTML += "<p>La imagen debe tener algunas de las siguientes extensiones: .jpg, .jpeg, .png o .gif</p>"
            advertencia.classList.remove("userAdd")
            advertencia.classList.add("validationUserAdd")
        }
        else {
            advertencia.innerHTML = "";
            advertencia.classList.remove("validationUserAdd")
            advertencia.classList.add("userAdd")
        }
    })



    /* --------------------------- VALIDACIONES AL APRETAR ENVIAR --------------------------- */
    form.addEventListener("submit", function (evento) {

        /* --------------------- VALIDACIONES DE ERRORES --------------------- */
        let errores = [];
        
        /* -------------- INPUT NAME -------------- */
        if (formNameRegister.value == "") {
            errores.push("El nombre no puede estar vacío");
            formNameRegister.classList.remove("is-valid");
            formNameRegister.classList.add("is-invalid");
        }
        else if (formNameRegister.length < 2) {
            errores.push("El nombre debe tener al menos 2 caracteres");
            formNameRegister.classList.remove("is-valid");
            formNameRegister.classList.add("is-invalid");
        }
        else {
            formNameRegister.classList.remove("is-invalid");
            formNameRegister.classList.add("is-valid");
        }


        /* -------------- INPUT APELLIDO -------------- */

        if (formApellidoRegister.value == "") {
            errores.push("El apellido no puede estar vacío");
            formNameRegister.classList.remove("is-valid");
            formNameRegister.classList.add("is-invalid");
        }
        else if (formApellidoRegister.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres");
            formApellidoRegister.classList.remove("is-valid");
            formApellidoRegister.classList.add("is-invalid");
        }
        else {
            formApellidoRegister.classList.remove("is-invalid");
            formApellidoRegister.classList.add("is-valid");
        }

        /* -------------- INPUT DNI -------------- */

        if (formDNIRegister.value == "") {
            errores.push("El DNI no puede estar vacío");
            formDNIRegister.classList.remove("is-valid");
            formDNIRegister.classList.add("is-invalid");
        }
        else if (formDNIRegister.length < 8) {
            errores.push("El DNI debe tener la siguiente estructura xx.xxx.xxx");
            formDNIRegister.classList.remove("is-valid");
            formDNIRegister.classList.add("is-invalid");
        }
        else {
            formDNIRegister.classList.remove("is-invalid");
            formDNIRegister.classList.add("is-valid");
        }


        /* -------------- INPUT EMAIL -------------- */

        if (formEmailRegister.value == "") {
            errores.push("El email no puede estar vacío");
            formEmailRegister.classList.remove("is-valid");
            formEmailRegister.classList.add("is-invalid");
        } 
        
        /* -------------- INPUT DIRECTION -------------- */

        if (formDirectionRegister.value == "") {
            errores.push("La dirección no puede estar vacía");
            formDirectionRegister.classList.remove("is-valid");
            formDirectionRegister.classList.add("is-invalid");
        }
        else if (formDirectionRegister.length < 5) {
            errores.push("La dirección debe tener al menos 5 caracteres");
            formDirectionRegister.classList.remove("is-valid");
            formDirectionRegister.classList.add("is-invalid");
        }
        else {
            formDirectionRegister.classList.remove("is-invalid");
            formDirectionRegister.classList.add("is-valid");
        }

        /* -------------- INPUT COUNTRY -------------- */

        if (formCountryRegister.value == "") {
            errores.push("El país no puede estar vacío");
            formCountryRegister.classList.remove("is-valid");
            formCountryRegister.classList.add("is-invalid");
        }
        else {
            formCountryRegister.classList.remove("is-invalid");
            formCountryRegister.classList.add("is-valid");
        }


        /* -------------- INPUT PHONE -------------- */

        if (formPhoneRegister.value == "") {
            errores.push("El número de celular no puede estar vacío");
            formPhoneRegister.classList.remove("is-valid");
            formPhoneRegister.classList.add("is-invalid");
        }
        else {
            formPhoneRegister.classList.remove("is-invalid");
            formPhoneRegister.classList.add("is-valid");
        }


        /* -------------- INPUT BIRTHDATE -------------- */

        if (formBirthdateRegister.value == "") {
            errores.push("La fecha de cumpleaños no puede estar vacía");
            formBirthdateRegister.classList.remove("is-valid");
            formBirthdateRegister.classList.add("is-invalid");
        }
        else {
            formBirthdateRegister.classList.remove("is-invalid");
            formBirthdateRegister.classList.add("is-valid");
        }


        /* -------------- INPUT PASSWORD -------------- */

        if (formPasswordRegister.value == "") {
            errores.push("La contraseña no puede estar vacía");
            formPasswordRegister.classList.remove("is-valid");
            formPasswordRegister.classList.add("is-invalid");
        }
        else if (formPasswordRegister.length < 8) {
            errores.push("La contraseña debe tener al menos 8 caracteres");
            formPasswordRegister.classList.remove("is-valid");
            formPasswordRegister.classList.add("is-invalid");
        }
        else {
            formPasswordRegister.classList.remove("is-invalid");
            formPasswordRegister.classList.add("is-valid");
        }

        /* -------------- INPUT PASSWORD CONFIRM -------------- */

        if (formPasswordConfirmRegister.value != formPasswordRegister.value) {
            errores.push("Las contraseñas deben coincidir");
            formPasswordConfirmRegister.classList.remove("is-valid");
            formPasswordConfirmRegister.classList.add("is-invalid");
        }
        else {
            formPasswordConfirmRegister.classList.remove("is-invalid");
            formPasswordConfirmRegister.classList.add("is-valid");
        }

        /* -------------- INPUT IMAGE -------------- */

        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if (!allowedExtensions.exec(formImgRegister.value)) {
            errores.push("La imagen debe tener algunas de las siguientes extensiones: .jpg, .jpeg, .png o .gif");
            formImgRegister.classList.remove("is-valid");
            formImgRegister.classList.add("is-invalid");
        }
        else {
            formImgRegister.classList.remove("is-invalid");
            formImgRegister.classList.add("is-valid");
        }



        
        /* -------------- VALIDACION FINAL -------------- */
        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.classList.add("alert-warning");
            ulErrores.innerHTML = "";
            for (error of errores) {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            }
        }

        else {
            /* evento.preventDefault(); */
            let ulErrores = document.querySelector(".errores");
            ulErrores.classList.add("alert-complete")
            ulErrores.innerHTML = "El usuario se guardó satisfactoriamente";
            evento.submit()
        }

    })
    
});
