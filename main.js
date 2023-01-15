function pedirAlbum(){
    let nombreIngresado = prompt("Ingrese el nombre del album de Metallica")
    return nombreIngresado
}
function pedirCantDisc(nombr){
    let cantidadDiscos = parseInt(prompt("Ingrese la cantidad de discos que desea comprar " + nombr))
    while(isNaN(cantidadDiscos)){
                    cantidadDiscos= parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de discos que desea comprar para continuar" + nombr))
    }
    return cantidadDiscos
}

function ingresarDiscos(cN){
    let total = 0
    for(let i = 1; i <=cN; i++){
        let nota = parseInt(prompt(`Ingresa disco n° ${i}`))
        while(isNaN(disco)){
            nota = parseInt(prompt(`Atención tipo de dato incorrecto, ingrese un disco del grupo. Ingrese disco n° ${i}`))
        }
        if(disco >= 100 && disco <=200){
            total = total + disco
            console.log(`El total de tu compra es ${total}`)
        }else{
            while(Disco < 0 || Disco > 10){
                nota = parseInt(prompt(`Atención ingrese un disco que valga entre 100 y 500 para el total n°${i}`))
            }
            total = total + disco
            console.log(`El total de tu compra es ${total}`)
        }
    }
    let promedio = total / cN
    console.log(`Tu compra fue de  ${promedio.toFixed(2)}`)
    return promedio
}

function preguntaSalida(){
    respuesta = prompt("Responda si desea seguir comprando en nuestra tienda")

}

let respuesta
            do{
                const nombre = pedirAlbum()
                const CantidadDiscos = pedirDiscos ()
                preguntaSalida()
}while(respuesta.toUpperCase() != "ESC")

