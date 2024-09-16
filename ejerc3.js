function calcularTotalManzanas() {
    var acumulador=6
    var pesos = [3.34568 , 2.45678 , 4.8765 , 1.548 , 3.78, 7.74 ];
    var pesos= prompt("ingrese el kg de manzanas:")
    var pesosNumericos = [];
    for (let i = 0; i < pesos.length; i++) {

    pesosNumericos.push(parseFloat(peso));
    
    }
    
    var sumaTotalKg = pesosNumericos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    
    
    console.log(`Suma total en kg: ${sumaTotalKg.toFixed(2)} kg`);
    }
    
    calcularTotalManzanas();





