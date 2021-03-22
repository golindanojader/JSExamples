var persona = {

		nombre: "Jader",
		email: "golindano.jader@gmail.com",
		face: "golindano.jader@face.com",
		saludar: function(){
			return "Hola Mundo";
		}


}
var dato = "";

for (dato in persona) {

	console.log(dato, persona[dato]);

}