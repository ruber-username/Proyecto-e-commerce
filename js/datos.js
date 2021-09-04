function datos_recuperados(){
    if(localStorage.getItem("misdatos")){
        misdatos_json = localStorage.getItem("misdatos");
        misdatos = JSON.parse(misdatos_json);
        document.getElementById("usuario_mail").innerHTML = misdatos.email;
    } else {
        document.getElementById("usuario_mail").innerHTML = "No parece haber datos..."; 
    }
    }
    datos_recuperados();
    