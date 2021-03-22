function persona(nombre, apellido){

	this.nombre = nombre;
	this.apellido = apellido;

}

var persona = new persona("Jader", "Golindano");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);