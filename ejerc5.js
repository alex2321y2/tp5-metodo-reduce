
var litrosCombustible = [1200, 2500, 1500, 2544, 2846, 3521]; 
var litrosCombustible= prompt("ingrese los litros ingresados al carro:"+totalCombustible);

for (var i = 0; i < datosDiarios.length; i++) {
litrosCombustible.push(datosDiarios[i]);
}

var totalCombustible = litrosCombustible.reduce((acumulador, valorActual) => {
return acumulador + valorActual;
}, 0);

console.log(`El total de combustible ingresado durante la semana es: $${datosDiarios}  Lts`);