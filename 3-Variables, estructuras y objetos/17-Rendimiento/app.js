console.time('rev');
var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0;i <1000;  i++) {

	animales[i] = i;
}


console.timeEnd('rev');