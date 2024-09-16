function calcularMontoCompra() {
    let precios = new Array(4);
    f
    cargarDatosFor(precios);
    
    let montoTotal = calcularMontoTotal(precios);
    
    console.log(`Monto total: ${formatearMoneda(montoTotal)}`);
    }
    
    function cargarDatosFor(precios) {
    valores = [];
    var valores = (150548, 100147, 51254, 255500.45);
    for (let i = 0; i < precios.length; i++) {
    precios[i] = valores[i];
    }
    }
    
    function calcularMontoTotal(precios) {
    let montoTotal = 0;
    for (let i = 0; i < precios.length; i++) {
    montoTotal += precios[i];
    }
    return montoTotal;
    }
    

    function formatearMoneda(monto) {
   
    monto = Math.round(monto * 100) / 100;
    
    let montoStr = monto.toFixed(2);
    let partes = montoStr.split(".");
    let enteros = partes[0];
    let decimales = partes[1];
    

    return `$${enteros}.${decimales}`;
    }
    

    
    calcularMontoCompra();