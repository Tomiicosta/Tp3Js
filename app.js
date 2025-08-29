// ejercicio 1


/*
let productos = [
    {
        id: 1,
        nombre: "pc1",
        precio: 101,
        stock: 150
    },
    {
        id: 2,
        nombre: "pc2",
        precio: 250,
        stock: 95
    },
    {
        id: 3,
        nombre: "pc3",
        precio: 150,
        stock: 50
    },
    {
        id: 4,
        nombre: "pc4",
        precio: 101,
        stock: 47
    },
    {
        id: 5,
        nombre: "pc5",
        precio: 1001,
        stock: 65
    }


]


productos.push({
    id:6,
    nombre: "pc6",
    precio: 250,
    stock: 50
})


productos.pop()


*/


// ejercicio 2


/*
let productosEnStock = productos.filter(n => n.stock > 60)


console.log(productosEnStock)
*/


// ejercicio 3
/*


let productoEncontrado = productos.find(n => n.nombre === "pc4")


if(productoEncontrado== undefined){
    console.log("Producto no encontrado")
}else{
    console.log(productoEncontrado)
}


*/


// ejercicio 4
/*
let precioTotal = productos.reduce((acumulador, numero) => acumulador + numero.precio, 0)


console.log(precioTotal)


let calcularPromedio = function(total, cantidad){
    return total / cantidad
}


console.log(calcularPromedio(precioTotal, productos.length))
*/


// ejercicio 5


/*
let sinStock = productos.some(n => n.stock === 0)
console.log(sinStock)


let productosMasDeCien = productos.every(n => n.precio > 100)
console.log(productosMasDeCien)


*/


// ejercicio 6


/*
let clientes =
[
    {
        id: 1,
        nombre: "tomas",
        edad: 22,
        compras: ["tomate", "lechuga"]
    },
    {
        id: 2,
        nombre: "sebastian",
        edad: 21,
        compras: ["pitusas", "carne", "danonino"]
    },
    {
        id: 3,
        nombre: "nahuel",
        edad: 23,
        compras: ["alfajor", "shampoo", "papa", "pc"]
    }
]


 clientes.forEach(n => console.log(n.nombre + " // Compras: " + n.compras.length))


 */


 // ejercicio 7


 /*
function procesarClientes (clientes, callback){
    callback(clientes)
}


procesarClientes (clientes, clientes.map(c => c.nombre))
procesarClientes (clientes, clientes.map(c => c.compras.length))






*/
// ejercicio 8


/*
let numeros = [1, 2, 6, 3, 8, 7, 10]


console.log(numeros)
console.log(numeros.sort((a,b) => a-b))
console.log(numeros.sort((a,b) => b-a))
*/


// ejercicio 9


/*
let objetoProducto = {
    arregloProductos: [productos[1], productos[2], productos[3]],
    vender: function(idProducto, cantidad){
        const producto =  this.arregloProductos.find(n => n.id === idProducto)
       
        if(producto){
            if(producto.stock >= cantidad){
                producto.stock -= cantidad
            } else{
                console.log("Stock insuficiente")
            }
        }else{
            console.log("Producto inexistente")
        }
    }
}
console.log(objetoProducto.arregloProductos)
objetoProducto.vender(2, 10)
console.log(objetoProducto.arregloProductos)


*/


// ejercicio 10


/*
let carrito = []


carrito.push(
    {
        producto: "lapicera",
        cantidad: 5,
        precioUnitario: 100
    },
    {
        producto: "lapiz",
        cantidad: 10,
        precioUnitario: 80
    },
    {
        producto: "cartuchera",
        cantidad: 1,
        precioUnitario: 1000
    },
    {
        producto: "goma",
        cantidad: 2,
        precioUnitario: 100
    }
)


console.log(carrito)
let total = carrito.reduce((acumulador, item) => acumulador + item.cantidad * item.precioUnitario, 0)
console.log("Total a pagar: " + total)


let mostrarDetalle = carrito.map( item => "Producto: " + item.producto + " - Cantidad: " + item.cantidad + " - Subtotal: " + item.cantidad * item.precioUnitario)


console.log(mostrarDetalle)
*/


// ejercicio 11


/*
let libros = [
        {
            id: 1,
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo mágico",
            disponible: true
        },
        {
            id: 2,
            titulo: "1984",
            autor: "George Orwell",
            genero: "Distopía",
            disponible: false
        },
        {
            id: 3,
            titulo: "El señor de los anillos",
            autor: "J.R.R. Tolkien",
            genero: "Fantasía",
            disponible: true
        },
        {
            id: 4,
            titulo: "Orgullo y prejuicio",
            autor: "Jane Austen",
            genero: "Romance",
            disponible: true
        },
        {
            id: 5,
            titulo: "Fahrenheit 451",
            autor: "Ray Bradbury",
            genero: "Ciencia ficcion",
            disponible: false
        }
]


function prestarLibro(id){
    libro = libros.find(libro => libro.id === id)
    if(libro){
        if(libro.disponible){
            libro.disponible = false
        }else{
            console.log("No disponible")
        }
    }else{
        console.log("Libro inexistente")
    }
}


prestarLibro(10)
console.log(libros)


console.log(libros.filter(libro => libro.genero === "Ciencia ficcion"))


let titulosMayuscula = libros.map(libro => libro.titulo.toUpperCase())
console.log(titulosMayuscula)


*/


// ejercicio 12


/*
let agenda = {
    contactos: [
        {
            id: 1,
            nombre: "Juan Pérez",
            telefono: "123-456-7890"
        },
        {
            id: 2,
            nombre: "Ana Gómez",
            telefono: "098-765-4321"
        },
        {
            id: 3,
            nombre: "Carlos López",
            telefono: "555-555-5555"
        },
        {
            id: 4,
            nombre: "Lucía Martínez",
            telefono: "111-222-3333"
        }
    ],


   agregarContacto(contacto){
        this.contactos.push(contacto)
    },
    eliminarContacto(id){
        this.contactos = this.contactos.filter(contacto => contacto.id !== id)
    },
    buscarContacto(nombre){
        let contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre)
        console.log(contactoEncontrado)
    },
    listarContactos(){
        console.log(this.contactos)
    }


};




agenda.agregarContacto({id: 5, nombre: "Tomas", telefono: '222'})
agenda.eliminarContacto(5)
agenda.buscarContacto("Ana Gómez")
agenda.listarContactos()


*/


// ejercicio 13


/*
let alumnos = [
    {
        id: 1,
        nombre: "Martina",
        notas: [7, 8.5, 9]
    },
    {
        id: 2,
        nombre: "Lucas",
        notas: [6, 7, 8.5]
    },
    {
        id: 3,
        nombre: "Carlos",
        notas: [5.5, 6, 7]
    },
    {
        id: 4,
        nombre: "Sofía",
        notas: [9, 9.5, 10]
    }
];


let promedioAlumnos = alumnos.map(alumno => ({
    id: alumno.id,
    nombre: alumno.nombre,
    promedio: alumno.notas.reduce((acumulador, nota) => acumulador + nota, 0) / alumno.notas.length
}));


let alumnosAprobados = promedioAlumnos.filter(alumno => alumno.promedio >= 8)
console.log(alumnosAprobados)
*/




// ejercicio 14



let productos = [
    {
        id: 1,
        nombre: "pc1",
        precio: 101,
        stock: 150
    },
    {
        id: 2,
        nombre: "pc2",
        precio: 250,
        stock: 95
    },
    {
        id: 3,
        nombre: "pc3",
        precio: 150,
        stock: 50
    },
    {
        id: 4,
        nombre: "pc4",
        precio: 101,
        stock: 47
    },
    {
        id: 5,
        nombre: "pc5",
        precio: 1001,
        stock: 65
    }


]



function comprar(id, cantidad, callbackExito, callbackError){
    let producto = productos.find(p => p.id === id)
    if(!producto){
        callbackError("Producto no encontrado")
        return;
    }
    if(producto.stock >= cantidad){
        producto.stock -= cantidad
        callbackExito("Producto: " + producto.nombre + " / Precio total: " + cantidad * producto.precio)
    }else{
        callbackError("No hay stock suficiente")
    }


}


// comprar(1, 500, m => console.log(m), m => console.log(m))



// ejercicio 15
/*
function aplicarDescuento(id, porcentaje, callbackExito, callbackError){
    let producto = productos.find(p => p.id === id)
    if(!producto){
        callbackError("Producto no encontrado")
        return;
    }
    if(porcentaje <= 0 || porcentaje > 100){
        callbackError("Porcentaje invalido")
        return;
    }
    producto.precio -= producto.precio * (porcentaje / 100);

    callbackExito("Nombre: " + producto.nombre + " // Precio: " + producto.precio)

}


 // aplicarDescuento(1, 20, m => console.log(m), m => console.log(m))

aplicarDescuento(1, 20,
    // callback de éxito de aplicarDescuento
    m => {
        console.log("Descuento aplicado:", m);

        // 👇 recién acá llamo a comprar()
        comprar(
            1,
            3,
            msg => console.log("Compra OK:", msg),
            err => console.log("Error al comprar:", err)
        );
    },
    // callback de error de aplicarDescuento
    err => console.log("Error al aplicar descuento:", err)
);
 */

// ejercicio 16

function filtrarPorStock(minStock, callbackExito, callbackError){
    let productosFiltrados = productos.filter(p => p.stock >= minStock)
    
    if (minStock <0 ){
        callbackError("Error: El stock no puede ser menor a 0.")
        return;
    }
    if(productosFiltrados.length === 0){
        callbackError("Error: No hay productos con ese stock.")
        return;
    }

    callbackExito(productosFiltrados)

}

filtrarPorStock(200, p => console.log(p), m => console.log(m))

