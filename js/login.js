//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botón").addEventListener("click", function(){

            let email = document.getElementById("email");
            let contraseña= document.getElementById("contraseña");
            let campo_completo = true;

            if(email.value === ""){
                email.classList.add("invalid");
                campo_completo = false;
            } else{
                email.classList.remove("invalid");
            }

            if(contraseña.value === ""){
                contraseña.classList.add("invalid");
                campo_completo = false;
            } else {
                contraseña.classList.remove("invalid");
            }

            if(campo_completo){window.location.href = 'inicio.html';}else{alert("Upss! Usuario o contraseña incorrectos :(");}

        
});})
