// Definir una lista de contactos (un array de objetos)
const listaDeContactos = [];

// Función para agregar un nuevo contacto
function agregarContacto(nombre, telefono, email) {
const nuevoContacto = {
    nombre: Maria ,
    telefono:34525126,
    email:correo
};
listaDeContactos.push(nuevoContacto);
}

// Función para buscar un contacto por nombre
function buscarContacto(nombre) {
return listaDeContactos.find(contacto => contacto.nombre === nombre);
}

// Función para eliminar un contacto por nombre
function eliminarContacto(nombre) {
const indice = listaDeContactos.findIndex(contacto => contacto.nombre === nombre);
if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
}
}

// Función para mostrar todos los contactos
function mostrarContactos() {
listaDeContactos.forEach(contacto => {
    console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`);
});
}

// crea una función para agregar un contacto de la lista 
function crearContac(contactonuevo)
agregarcontacto("Luis Gómez", "345-567-789", "luisgomez@hotmail.com");
agregarContacto("Laura Vargas", "314577890", "lauravargas@hotmail.com");
agregarContacto("Carlos Rodríguez", "555-555-5555", "carlos@gmail.com");

console.log("Lista de contactos:");
mostrarContactos();

console.log("Buscando a luis Gómez:");
const contactoEncontrado = buscarContacto("luis Gómez");
if (contactoEncontrado) {
console.log(`Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}, Email: ${contactoEncontrado.email}`);
} else {
console.log("Contacto no encontrado.");
}

console.log("Eliminando a María García:");
eliminarContacto("María García");
console.log("Lista de contactos después de eliminar a María García:");
mostrarContactos();


