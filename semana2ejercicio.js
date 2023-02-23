// EJERCICIO VOY AL GIMNASIO

//VERIFICAR TEMPERATURA
let temperatura = 28
console.log( temperatura )

//LLUEVE?
let lluvia = false
console.log( lluvia )

//VAMOS AL GIMNASIO?
console.log( temperatura < 30 && lluvia == false)

//VESTIMENTA
function Vestimenta(temperatura){
    let eleccion;
    if (temperatura < 22){
        eleccion = 'Remera'
    } else {
        eleccion = 'Musculosa'
    }
    return eleccion;
}
console.log(Vestimenta(temperatura))