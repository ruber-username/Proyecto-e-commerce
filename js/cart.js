//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CARRITO_MEJORADO).then(function(resultObj){
        if (resultObj.status === "ok"){
            carrito = resultObj.data;
            mostrar_carrito(carrito);
            total();
    }
})
});
var carrito;

function mostrar_carrito(array){
    let relleno="";
    let info_carrito="";
    for(let i = 0; i < array.articles.length; i++){
    let carrito = array.articles[i];

    if (carrito.currency === 'USD'){
carrito.unitCost = carrito.unitCost*40
};

        relleno +=
        `       
        <div class="row">
        <div class="col-lg-3 info_final">
        <br>
        ${carrito.name} <br>
        Precio por unidad: ${carrito.unitCost} UYU <br>
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
        <div class="col-lg-4 col-md-15">
        <img src="img/Gatito.png" height="250px" class="img-fluid">
        </div>

        <div class="col-lg-3 col-md-4 info_final"> 
        <br><br>
        Costo total: <p id="total"></p>
        Envío: 
        <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Premium (2-5 días)
  </label>
  </div> 
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2">
  <label class="form-check-label" for="exampleRadios1">
    Express (5-8 días)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3">
  <label class="form-check-label" for="exampleRadios1">
    Standard (12 a 15 días)
  </label>
</div><br>
</div>
<div class="col-lg-3 col-md-4 info_final"> <br><br>
        Forma de pago:
        <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios1" value="option4" checked>
  <label class="form-check-label" for="exampleRadios1">
    Tarjeta de crédito
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="option5">
  <label class="form-check-label" for="exampleRadios1">
    Transferencia bancaria
  </label>
</div>
        </div> 

        <div class="col-lg-2 col-md-4">
        <br><br>
        <button type="button" class="btn btn-outline-success el_boton">Comprar!</button>
        <br><br>
        <button type="button" class="btn btn-outline-danger el_boton">Cancelar compra</button>
        </div>
      </div><br>
        `  
        document.getElementById("carrito").innerHTML = `<p class="info_final">Usted ha elegido ${array.articles.length} cantidad de productos: <br></p>` + relleno + info_carrito;}


function subtotal(unitCost, i){
cantidad_elegida = parseInt(document.getElementById(`customRange3${i}`).value); //cantidad que elije el usuario
tot = cantidad_elegida*unitCost; //el subtotal es cantidad x costo
document.getElementById(`subt${i}`).innerHTML = tot; // meto el subotal en la casilla con ese id
total();
}

function total(){
  let total = 0;

  let subtotales = document.getElementsByClassName("subtotal");
  for (var i = 0; i < subtotales.length; i++) {

    total += parseInt(subtotales[i].innerHTML); 
}
document.getElementById("total").innerHTML = total + ' UYU';}