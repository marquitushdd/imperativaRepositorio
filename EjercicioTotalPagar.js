const totalAPagar = ( vehiculo, litrosConsumidos) => {
    let precioAPagar = 0

    if( vehiculo === "coche" ){
        precioAPagar = litrosConsumidos * 86
    }else if( vehiculo === "moto" ){
        precioAPagar = litrosConsumidos * 70
    }else if( vehiculo === "autobus" ){
        precioAPagar = litrosConsumidos * 55

    }
}

let precioFinal = totalAPagar("coche", 25)
console.log(precioFinal);