//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CARRITO_MEJORADO).then(function(resultObj){
        if (resultObj.status === "ok"){
            carrito = resultObj.data;
            mostrar_carrito(carrito);
    }
})
});
var carrito;

function mostrar_carrito(array){
    let relleno="";
    let info_carrito="";
    for(let i = 0; i < array.articles.length; i++){
        let carrito = array.articles[i];
        relleno +=
        `
        <div class="row">
        <div class="col-lg-3 info_final">
        <br>
        ${carrito.name} <br>
        Precio por unidad: ${carrito.unitCost} ${carrito.currency}<br>
        Productos disponibles: ${carrito.count}<br>
        </div>

        <div class="col-lg-6 info_final"><img src="${carrito.src}" alt="Foto de auto recomendado" height="150px" class="img-fluid carritoimg"></div>

        <div class="col-lg-3 info_final">

        <label for="customRange3">Cantidad a comprar:</label>
        <input type="range" class="custom-range" min="1" max="${carrito.count}" id="customRange3${i}" value="1" oninput="this.nextElementSibling.value = this.value">
        <output>1</output><br>

      Costo total del costo unitario: <br>
      
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
        <div class="col-lg-6 col-md-9 info_final"> 
        <br><br>   
        Subtotal: sumatoria de costos totales<br>
        Costo total: <br>
        Costo envío: <br>
        Forma de pago: <br>
        </div>
        <div class="col-lg-2 col-md-3">
        <br><br>
        <button type="button" class="btn btn-outline-success el_boton">Comprar!</button>
        <br><br>
        <button type="button" class="btn btn-outline-danger el_boton">Cancelar compra</button>
        </div>
      </div>
        `  

        document.getElementById("carrito").innerHTML = `<p class="info_final">Usted ha elegido ${array.articles.length} cantidad de productos: <br></p>` + relleno + info_carrito;}

