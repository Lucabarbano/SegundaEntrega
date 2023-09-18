//Proyecto numero 2 
//Concesionaria 

//Clase
class Vehiculos
{
 constructor( marca, modelo, precio )
 {
    this.marca = marca.toUpperCase();
    this.modelo = modelo.toUpperCase();
    this.precio = parseFloat(precio);
   
 }

 calcularPrecioContado() {
    // Supongamos un descuento del 10% para pagos al contado
    const descuento = 0.10;
    const precioContado = this.precio * (1 - descuento);
    return precioContado;
  }



calcularPrecioTarjeta(){
    let impuestoPais = 1.21;
    let precioFinal = this.precio *impuestoPais ;
     return precioFinal;
}



}

//Creacion de Objeto


const auto1 = new Vehiculos( "Volkswagen","Golf GTI", 15000);


const auto2 = new Vehiculos("Fiat","Cronos", 10000)

const auto3 = new Vehiculos("Ford", "Maverik", 20000)



let nombreCliente = prompt("Ingrese su Nombre")
alert(`Bienvenido ${nombreCliente.toLocaleUpperCase()} a la Concesionaria GasMonkey!!!`)

alert("A continuacion le mostraremos los modelos de autos que quedan en Stock!!")
alert("Modelos |GOLF GTI | CRONOS | MAVERIK" )

let modeloElegido = prompt(`¿Qué modelo de auto te gusta? (Golf GTI), (Cronos), (Maverik) `);

while (modeloElegido !== null) {
    

    if (modeloElegido === "Golf GTI") {
        alert('Excelente elección. El Golf GTI es un gran automóvil.');
        alert(`Detalles :  Marca ${auto1.marca}, Modelo: ${auto1.modelo} \n
        Precio Lista: $${auto1.precio}
        Precio al Contado ${auto1.calcularPrecioContado()} 
        Precio con Tarjeta $${auto1.calcularPrecioTarjeta()}`);
        break;
    } else if (modeloElegido === "Cronos") {
        alert('Excelente elección. El Cronos es un gran automóvil.');
        alert(`Detalles :  Marca ${auto2.marca}, Modelo: ${auto2.modelo} \n
        Precio Lista: $${auto2.precio} 
        Precio al Contado $${auto2.calcularPrecioContado()} \n
        Precio con Tarjeta $${auto2.calcularPrecioTarjeta()}`);
        break;
    } else if (modeloElegido === "Maverik") {
        alert('Excelente elección. La Maverik es una gran Camioneta.');
        alert(`Detalles :  Marca ${auto3.marca}, Modelo: ${auto3.modelo}\n
        Precio Lista: $${auto3.precio}  
        Precio al Contado $${auto3.calcularPrecioContado()} \n
        Precio con Tarjeta $${auto3.calcularPrecioTarjeta()}`);
        break;
    } else if (modeloElegido !== null) {
        alert('Lo siento, no reconocemos ese modelo. Por favor, elige entre Golf GTI, Cronos o Maverik.');
        break;
    }
}

alert(`Felicitaciones: ${nombreCliente.toLocaleUpperCase()}  por Adquirir el Vehiculo:  ${modeloElegido}`)

alert(`Proximamente estaremos Incorporando nuevas Marcas de Autos 
       Quisiera darnos algunas sugerencias?`)

const nuevosAutos = ["Chevrolet", "Renault","Volkswagen","Ford","Fiat"];  //Ejemplo Toyota, Audi, BMW, Nissan, Peugeot

// Pedir al usuario que ingrese una nueva Marca
// Verificar si la marca no esta ya en el Arrays 
// Y si no esta, Agregar la Nueva Marca al Array nuevosAutos

while (true) {
  const nuevoMarca = prompt("Por favor, ingrese una nueva Marca:");

  if (nuevoMarca !== null && nuevoMarca.trim() !== "") {
    if (!nuevosAutos.includes(nuevoMarca)) {

      nuevosAutos.push(nuevoMarca);
      alert(`La Marca"${nuevoMarca}" se ha agregado a la lista de NuevosAutos.`);
    }
    else {
      alert(`La Marca ${nuevoMarca}, ya esta en la Lista de NuevosAutos`);
    }

    //Preguntarle al Usuario Si desea Ingresar Otroa Marca??
    let respuesta = prompt("¿Desea ingresar otra marca? (Sí/No)")
    if (respuesta.toLocaleUpperCase() !== "SI")
      break;

  } else {
    alert(`No se ingreso un Modelo Valido.  `);
  }

}


// Mostrar la lista actualizada de nuevosAutos
 alert("Lista actualizada de NuevosAutos: " + nuevosAutos.join(" - "));

 alert("Gracias por su participacion, Que tenga un lindo dia!! :)")
















// if (nuevoMarca !== null && nuevoMarca.trim() !== "") {
//   nuevosAutos.push(nuevoMarca);
//   alert(`El modelo "${nuevoMarca}" se ha agregado a la lista de NuevosAutos.`);
// } else {
//   alert("No se ingresó un modelo válido.");
// }

// // Mostrar la lista actualizada de nuevosAutos
// alert("Lista actualizada de NuevosAutos: " + nuevosAutos.join(", "));

