var tienda =  {

nombre: "Tienda market",  // Propiedad

// métodos
calcular: function(costo1, costo2) {
	return costo1 + costo2;
}, 

saludar:function(){
	var mensaje = "Hola";
	return mensaje;
	}

};


// console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function(){

	console.log(tienda.saludar());
	console.log(tienda.nombre);
	console.log(tienda.calcular(20,32));

});