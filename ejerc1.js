var notas = [ ];
var cantidad =5

for(let i=0; i notas[i]=parseFloat(prompt("Ingrese el valor de la nota")){

}
var sumaTotal = notas.reduce((acumulador, valorActual) => {
return acumulador + valorActual;
}, 0);

var promedio = sumaTotal / notas.length;

var sumaTotalFormateada = sumaTotal.toFixed(2);
var promedioFormateado = promedio.toFixed(2);

console.log(`Suma Total: $${sumaTotalFormateada}`);
console.log(`Promedio: $${promedioFormateado}`);








