//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  recuperar_datos_usuario();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

});



function recuperar_datos_usuario(){
    if(localStorage.getItem("datos_del_usuario")){
        los_datos = localStorage.getItem("datos_del_usuario");
        variable = JSON.parse(los_datos);

      los_datos2 = localStorage.getItem("foto_del_usuario");
      variable2 = JSON.parse(los_datos2);

        document.getElementById("validationCustom01").value = variable.nombre;
        document.getElementById("validationCustom02").value = variable.apellido;
        document.getElementById("validationCustom03").value = variable.edad;
        document.getElementById("validationCustom04").value = variable.celular;
        document.getElementById("imgperfil").src = variable2.fotito
    }}

function quitamos_disabled(){
    document.getElementById("validationCustom01").disabled = false;
    document.getElementById("validationCustom02").disabled = false;
    document.getElementById("validationCustom03").disabled = false;
    document.getElementById("validationCustom04").disabled = false;
}

function foto_perfil(){

  let foto_perfil = document.getElementById("imgperfil");
  let foto_cargada = document.getElementById("customFile").files[0];

  let reader = new FileReader(); //construyo objeto que lee datos desde objetos de tipo file

  reader.onload = function (){
    foto_perfil.src = reader.result; //se ejecuta cuando se carga la página, la source de la foto de perfil es la que haya leído el Reader
  }

  if(foto_cargada){
    reader.readAsDataURL(foto_cargada); //si hay foto cargada, lee el contenido del file
  } else {
    foto_perfil.src = "https://i.ibb.co/sJ04F7C/gatito.jpg";
  }
}

function datos_del_usuario(){
  let datos_del_usuario ={
      nombre: document.getElementById("validationCustom01").value,
      apellido: document.getElementById("validationCustom02").value,
      edad: document.getElementById("validationCustom03").value,
      celular: document.getElementById("validationCustom04").value,
  };
  let foto_perfil = {fotito: document.getElementById("imgperfil").src};
  localStorage.setItem("foto_del_usuario", JSON.stringify(foto_perfil));

  let datos_del_usuario_json = JSON.stringify(datos_del_usuario);
  localStorage.setItem("datos_del_usuario", datos_del_usuario_json);
}