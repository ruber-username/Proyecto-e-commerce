//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productsarray= resultObj.data;
            mostrarlistado(productsarray);
            }
        });
    document.getElementById("buscador_marca").addEventListener('input', function () {
        buscar = document.getElementById("buscador_marca").value.toLowerCase();
        mostrarlistado(productsarray);
});
    document.getElementById("buscador_desc").addEventListener('input', function () {
    buscar2 = document.getElementById("buscador_desc").value.toLowerCase();
    mostrarlistado(productsarray);
});
});

//filtrado//
var buscar = undefined;
var buscar2 = undefined;
var preciomax = undefined;
var preciomin = undefined;
var productsarray = [];

function mostrarlistado(array){
            let contenido="";
for(let i=0; i < array.length; i++){
let auto = array[i];

    if (((preciomin == undefined) || (preciomin != undefined && parseInt(auto.cost) >= preciomin)) &&
    ((preciomax == undefined) || (preciomax != undefined && parseInt(auto.cost) <= preciomax))){
    if ((buscar === undefined || auto.name.toLowerCase().includes(buscar)) &&
    (buscar2 === undefined || auto.description.toLowerCase().includes(buscar2))){

contenido += `
<tr>
<td>`+ auto.name +`</td>
<td>`+ auto.description +`</td>
<td>`+ auto.cost + ` ` + auto.currency +`</td>
<td>`+ auto.soldCount +`</td>
<td>`+ '<img src="' +auto.imgSrc +'" alt="Foto de auto"/ height="250px">' +`</td>
</tr>
`;
    }}
document.getElementById("contenido").innerHTML = contenido;
}
};

// botón filtrar //

document.getElementById("filtrar").addEventListener("click", function (){
preciomax = document.getElementById("preciomax").value;
preciomin = document.getElementById("preciomin").value;

if((preciomax != undefined) && (preciomax != "") && (parseInt(preciomax)) >=0){
    preciomax = parseInt(preciomax);
}
else
{preciomax = undefined;}

if((preciomin != undefined) && (preciomin != "") && (parseInt(preciomin)) >=0){
        preciomin = parseInt(preciomin);
}
else
{preciomin = undefined;}

mostrarlistado(productsarray);
});

//borrar mi precio máximo y mínimo//
document.getElementById("borrar").addEventListener("click",function (){
    document.getElementById("preciomax").value="";
    document.getElementById("preciomin").value="";
    document.getElementById("buscador_marca").value="";
    document.getElementById("buscador_desc").value="";
    buscar = undefined;
    buscar2 = undefined;
    preciomax= undefined;
    preciomin= undefined;
    mostrarlistado(productsarray);
});

//botones de ordenar//
document.getElementById("precio_asciende").addEventListener("click", function(){
   productsarray = sortAutos(1, productsarray);
   mostrarlistado(productsarray); 
});

document.getElementById("precio_desciende").addEventListener("click", function(){
    productsarray = sortAutos(2, productsarray);
    mostrarlistado(productsarray); 
 });

 document.getElementById("relevancia_descendiente").addEventListener("click", function(){
    productsarray = sortAutos(3, productsarray);
    mostrarlistado(productsarray); 
 })

 //mostrando las opciones//

 function sortAutos(opcion, array){
     let result=[];

if(opcion === 1){
    result= array.sort(
        function(a,b){
            if(a.cost < b.cost){return -1;}
            if(a.cost > b.cost){return 1;}
            return 0;
        });
    }else if(opcion ===2){
        result= array.sort(
            function(a,b){
                if(a.cost > b.cost){return -1;}
                if(a.cost < b.cost){return 1;}
                return 0;
            });
    }
    else if(opcion === 3){
        result= array.sort(
            function(a,b){
                if(a.soldCount > b.soldCount){return -1;}
                if(a.soldCount < b.soldCount){return 1;}
                return 0;
            });
    }
return result;
}

//

