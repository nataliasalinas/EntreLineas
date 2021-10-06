//
//
//
// SECCION USUARIOS

// NUEVOS USUARIOS

class nuevoUsuario{
    constructor(nombre, apellido, edad, usuario, contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }

}

let UsuariosRegistrados = [];
UsuariosRegistrados.push(new nuevoUsuario("Natalia", "Salinas", 26, "admin", "admin123"));

const regristrarse = () => {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = Number(prompt("Ingrese su edad"));
    let usuario = prompt("Ingrese su usuario");
    let contraseña = prompt("Ingrese su contraseña");

    const usuarioNuevo = new nuevoUsuario(nombre, apellido,edad,usuario,contraseña);
    console.log(usuarioNuevo);

    UsuariosRegistrados.push(usuarioNuevo);

}

// Usuarios Resgistrados

const usuario = "admin";
const contraseña = "admin123";

let pedidoUsuario = prompt("Ingrese su usuario");
let pedidoContraseña = prompt("Ingrese su contraseña");

pedidoUsuario = pedidoUsuario.toLowerCase()
pedidoContraseña = pedidoContraseña.toLowerCase()

if (pedidoUsuario === usuario && pedidoContraseña === contraseña){
    alert(`Bienvenido ${usuario}`)

    let edad = prompt(`Ingresa tu edad por favor ${usuario}`)

    if(edad >= 18){
        alert(`${usuario}, eres mayor de edad. Bienvenid@ a EntreLineas - Tienda de libros.`)
    }else{
        alert(`${usuario}, Bienvenido a EntreLineas - Tienda de libros, al no tener la mayoria de edad hay secciones que seran bloqueadas para ti.`)
    }

} else{
    alert("Has ingresado el usuario o la contraseña incorrecta, vuelve a intentar")
}




// SECCION LIBROS
class Libros {

    constructor(titulo, autor, año, categoria, editorial, stock, cantidad, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.categoria = categoria;
        this.editorial = editorial;
        this.stock = stock;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    datos1(){
        console.log(`El siguiente titulo ${this.titulo} es del autor ${this.autor} y de la editorial ${this.editorial}.`)
    }

    datos2(){
        console.log(`Tenemos en stock ${this.cantidad} libros por el momento.`)
    }
}

// STOCK = DISPONIBILIDAD       CANTIDAD = ALMACEN

let librosDisponibles = [];
librosDisponibles.push(new Libros("Harry Potter", "J.K. Rowling", 2002, "Ciencia Ficcion", "Salamandra", 10, 42, 500));
librosDisponibles.push(new Libros("Juegos del Hambre", "Suzanne Collins", 2012, "Ciencia Ficcion", "RBA", 2, 10, 300));
librosDisponibles.push(new Libros("El principito", "Antonie de Saint-Exupéry", 1943, "Infantil", "Susaeta", 4, 0, 600));
librosDisponibles.push(new Libros("El bazar de los malos sueños", "Stephen King", 2015, "Terror", "Debolsillo", 0, 0, 1000));

//CARGA DE LIBROS

const cargarLibro = () => {
    let titulo = prompt("TITULO");
    let autor = prompt("AUTOR");
    let año = Number(prompt("AÑO"));
    let categoria = prompt("CATEGORIA");
    let editorial = prompt("EDITORIAL");
    let stock = Number(prompt("STOCK"));
    let cantidad = Number(prompt("CANTIDAD"));
    let precio = Number(prompt("PRECIO"));

    const libroNuevo = new Libros(titulo, autor, año, categoria, editorial, stock, cantidad, precio);
    console.log(libroNuevo);
    libroNuevo.datos1()
    libroNuevo.datos2()

    librosDisponibles.push(libroNuevo);
}

//CARGA DE LIBROS

//      FILTROS

//FILTRO POR TITULO

librosDisponibles.sort((a,b) => {
    if (a.titulo > b.titulo){
        return 1
    }
    if (a.titulo < b.titulo){
        return -1
    }
    return 0
})

// FILTRO POR STOCK

librosDisponibles.sort((a,b) => {
    if (a.stock > b.stock){
        return 1
    }
    if (a.stock < b.stock){
        return -1
    }
    return 0
})

// FILTRO POR CANTIDAD

librosDisponibles.sort((a,b) => {
    if (a.cantidad > b.cantidad){
        return 1
    }
    if (a.cantidad < b.cantidad){
        return -1
    }
    return 0
})

// FILTRO POR PRECIO

librosDisponibles.sort((a,b) => {
    if (a.precio > b.precio){
        return 1
    }
    if (a.precio < b.precio){
        return -1
    }
    return 0
})
//      FILTROS

