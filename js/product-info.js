

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj){
        if (resultObj.status === "ok"){
            automovil = resultObj.data;
verAuto(automovil); }});
            
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj){
            if (resultObj.status === "ok"){
                comentarios = resultObj.data;
    verComent(comentarios);
    }})
});

var automovil = [];
var comentarios = [];
function verAuto(array){
                let relleno="";
            relleno += `
            <div> 
            <h1 style= "text-align: center;">${array.name}</h1><br>
            ${array.description}<br><br>
            <p> Precio: ${array.cost }
            ${array.currency}<br><br>
            <p> Recuento de venta: ${array.soldCount} </p><br>
            <p> Categoría: ${array.category} </p><br>
            <p> Productos relacinados: ${array.relatedProducts} </p><br>
            </div>
            `;
            lasfotos();
            
            document.getElementById("modelo").innerHTML = relleno;

}

function lasfotos(){
    let fotos = "";
fotos += `
    <div id="carouselExampleControls" class="carousel slide shadow-lg" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="img/prod1_1.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/prod1_2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/prod1_3.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="img/prod1_4.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;
  document.getElementById("fotos_del_auto").innerHTML = fotos;
}

function verComent(array){
    let interior="";
    for(let i = 0; i < array.length; i++){
        let com = array[i];
interior += `
<div>
${com.user} dice: <br>
${com.description} <p style="text-align: right;">${com.dateTime}</p>
<i class='icono-${com.score}'></i><br>
</div><hr><br>
`;

document.getElementById("comentarios_aqui").innerHTML = interior;

    }
}

//estrellas

addEventListener("DOMContentLoaded", function(e){
    document.getElementById("corazones").innerHTML =`
        <div class="heart-rating">
        <input id="heart-5" type="radio" name="rating" value="5"/>
        <label for="heart-5" title="Lo amé :D">
        <i class="active fa fa-heart"></i>
        </label>

        <input id="heart-4" type="radio" name="rating" value="4"/>
        <label for="heart-4" title="Muy bueno">
        <i class="active fa fa-heart"></i>
        </label>

        <input id="heart-3" type="radio" name="rating" value="3"/>
        <label for="heart-3" title="Regular">
        <i class="active fa fa-heart"></i>
        </label>

        <input id="heart-2" type="radio" name="rating" value="2"/>
        <label for="heart-2" title="No muy bueno">
        <i class="active fa fa-heart"></i>
        </label>

        <input id="heart-1" type="radio" name="rating" value="1"/>
        <label for="heart-1" title="Mala experiencia">
        <i class="active fa fa-heart"></i>
        </label>
        </div>
        `
})

//extra: agregar el comentario

function mostrando_comentario(){
array_sin_nada = [];
comentario_objeto = {};
var texto = document.getElementById("comentar").value;

const date = new Date;
var año = date.getFullYear();
var mes = ('0' + (date.getMonth() + 1)).slice(-2);
var dia = date.getDate();
var hora = date.getHours();
var minutos = date.getMinutes();
var segundos = date.getSeconds();

let correcta_fecha = año + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos + ':' + segundos;

localStorage.getItem("micoment")
  micoment_json = localStorage.getItem("micoment");
  micoment = JSON.parse(micoment_json);

let elcomentario ={
user:"Usted",
description: texto,
dateTime: correcta_fecha,
score: "4"
}

comentarios.push(elcomentario);
verComent(comentarios);
document.getElementById("comentar").value="";
document.querySelectorAll('[name=rating]').forEach((x) => x.checked=false);
}

