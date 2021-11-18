//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CARRITO_MEJORADO).then(function(resultObj){
      if (resultObj.status === "ok"){
          carrito = resultObj.data;
          mostrar_carrito(carrito);
          total();
          borrar_e();
          fecha_minima();
  }
})
});
var carrito;

function mostrar_carrito(array){
  let relleno="";
  let info_carrito="";
  for(let i = 0; i < array.articles.length; i++){
  let carrito = array.articles[i];
precio = carrito.unitCost;
  if (carrito.currency === 'USD'){
carrito.unitCost = carrito.unitCost*40
};

      relleno +=
      `       
      <div class="row">
      <div class="col-lg-3 info_final">
      <br>
      ${carrito.name} <br>
      Precio por unidad: ${precio} ${carrito.currency} <br>
      <button type="button" id="borrar" onclick="borrar(${i});" class="btn btn-outline-secondary text-light">Borrar</button>
      </div>

      <div class="col-lg-6 info_final"><img src="${carrito.src}" alt="Foto de auto recomendado" height="150px" class="img-fluid carritoimg"></div>

      <div class="col-lg-3 info_final">

      <label for="customRange3">Cantidad a comprar:</label>
      <input type="range" class="custom-range" min="1" max="10" id="customRange3${i}" value="${carrito.count}" oninput="subtotal(${carrito.unitCost}, ${i}); this.nextElementSibling.value = this.value">
      <output>${carrito.count}</output><br>

    Subtotal:<div class="subtotal" id="subt${i}">${carrito.unitCost*carrito.count}</div> UYU <br>
    
      </div>
    </div>
<br>
      `  }
      info_carrito +=
      `
      <div class="row justify-content-md-center">
      <div class="col-md-6">
      <img src="img/Gatito.png" width="280px" class="img-fluid">
      </div>

      <div style="font-size: 38px;" class="col-md-6 info_final"> 
      <br>
      Costo total: <div style="font-size: 50px;" id="total"></div>UYU<br>
      
</div>
    </div><br>
      `  
      document.getElementById("carrito").innerHTML = `<p class="info_final">Usted ha elegido ${array.articles.length} cantidad de productos: <br></p>` + relleno;
document.getElementById("carrito2").innerHTML = info_carrito;}

function subtotal(unitCost, i){
cantidad_elegida = parseInt(document.getElementById(`customRange3${i}`).value); //cantidad que elige el usuario
tot = cantidad_elegida*unitCost; //el subtotal es cantidad x costo
document.getElementById(`subt${i}`).innerHTML = tot; // meto el subtotal en la casilla con ese id
total();
}

function total(){
let total = 0;

let subtotales = document.getElementsByClassName("subtotal");
for (var i = 0; i < subtotales.length; i++) {

  total += parseInt(subtotales[i].innerHTML); 
}
document.getElementById("total").innerHTML = total;}

$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus')
})

function paises(){
let pais = document.getElementById("inputGroupSelect01").value;
if (pais == "otro"){
  document.getElementById('otropais').style.display='block';
}else{
  document.getElementById('otropais').style.display='none';
  document.getElementById('otropais2').disabled = true;
}}

let form = document.getElementById("formulario");
let form2 = document.getElementById("formulario2");
form.addEventListener('submit', function (event) {
    if (form2.checkValidity()=== false || form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation();
        alert('Parece que hay algo inválido con el método de pago.')
    }else{
        alert('Compra finalizada correctamente!');
    }
}
)

function costoenvío(){
  let elcostoenvio;
  let total = document.getElementById("total").innerHTML;
  
  let caro = document.getElementById("customRadio1");
  let medio = document.getElementById("customRadio2");
  let barato = document.getElementById("customRadio3");
  if(caro.checked == true){
    elcostoenvio = Math.round(0.15*total);
    document.getElementById("total").innerHTML = +elcostoenvio + +total;
  } else if(medio.checked == true){
    elcostoenvio = Math.round(0.07*total);
    document.getElementById("total").innerHTML = +elcostoenvio + +total;
  } else if(barato.checked == true){
    elcostoenvio = Math.round(0.05*total);
    document.getElementById("total").innerHTML = +elcostoenvio + +total;
  }
  document.getElementById("costos").innerHTML = 'Costo del envío: ' + elcostoenvio + ' UYU';
}

function disabledTarjeta(){
  document.getElementById("tarjeta1").disabled = true;
  document.getElementById("tarjeta2").disabled = true;
  document.getElementById("tarjeta3").disabled = true;
  document.getElementById("tarjeta4").disabled = true;
}

function nodisabledTarjeta(){
  document.getElementById("tarjeta1").disabled = false;
  document.getElementById("tarjeta2").disabled = false;
  document.getElementById("tarjeta3").disabled = false;
  document.getElementById("tarjeta4").disabled = false;
}

function otro(){
  let checkear = document.getElementById("flexCheckDisabled");
  checkear.checked = false;
}

function borrar_e(){
   var datos = document.getElementsByClassName('numeros');
  var ese_coso = ["e", "+", "-"];
  for(var i = 0; i < datos.length; i++)
{
  datos[i].addEventListener("keydown", function(e) {
    if (ese_coso.includes(e.key)) {
      e.preventDefault();
    };
})
};
}

function fecha_minima(){
  var calendario = document.getElementById('tarjeta4');
  const date = new Date;
  var mes = ('0' + (date.getMonth() + 1)).slice(-2);
  var año = date.getFullYear();
  calendario.min = año + '-' + mes;
}

var nuevo_array;

function borrar(i){
  var arreglo = carrito.articles;
  arreglo.splice(i,1);
  mostrar_carrito(carrito);
  total();
  borrar_e();
  fecha_minima();
  costoenvío();
}