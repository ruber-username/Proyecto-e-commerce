function datos_recuperados(){
    if(localStorage.getItem("misdatos")){
        misdatos_json = localStorage.getItem("misdatos");
        misdatos = JSON.parse(misdatos_json);


        var nidos = document.getElementsByClassName('usuario_mail');
        for (var i = 0; i < nidos.length; i++) {
            nidos[i].innerHTML =
            `
            <div class="dropdown"> 
            <button class="btn btn-warning dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${misdatos.email}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="cart.html">Mi carrito</a>
              <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="index.html" onclick="window.localStorage.removeItem('misdatos'); window.localStorage.removeItem('datos_del_usuario');">Cerrar Sesión</a>
            </div>
          </div>
            `
        }

        var nido2 = document.getElementById("validationCustomUsername");
        nido2.value = misdatos.email;


    } else {


        var nidos = document.getElementsByClassName('usuario_mail');
        for (var i = 0; i < nidos.length; i++) {
            nidos[i].innerHTML = "No parece haber datos... ";
        }


    }
    }
    datos_recuperados();
    