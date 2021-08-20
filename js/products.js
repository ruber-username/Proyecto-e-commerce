//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(PRODUCTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
            lista_de_productos(PRODUCTS_URL);
        }
    });
});


function lista_de_productos(url){

    document.getElementById("data1").innerHTML= "";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos =>{

        for(let i=0; i<datos.length; i++)
        {
            let imagen="";

            if(i===1){
                imagen='<img src="img/prod1.jpg">';
            }else{
                if(i===2){
                    imagen='<img src="img/prod2.jpg">';
                }else{
                    if(i===3){
                        imagen='<img src="img/prod3.jpg">';
                    }else{
                        imagen='<img src="img/prod4.jpg">';
                    }
                }
            }

                        let row="";
                        row= `
                            <tr>
                            <td>`+ datos[i].name +`</td>
                            <td>`+ datos[i].description +`</td>
                            <td>`+ datos[i].cost + ` ` + datos[i].currency +`</td>
                            <td>`+ datos[i].soldCount +`</td>
                            <td>`+ imagen +`</td>  
                            </tr>
                            `;
                document.getElementById("data1").innerHTML += row;
        };

    })
    .catch(error => alert("Error" + error));
}