// ============================================================ //
// PRÁCTICA OBJETOS LITERALES                                   //
// Enunciados: 1.3.8-b-practicas-objetos-literales.md (1 al 10) //
//             1.3.9-practicas.md (ejercicios 2, 3, 4 y 10)     //
// Los resultados salen por la consola del navegador (F12).     //
// El ejercicio 10 de 1.3.9 pide datos con prompt().            //
// ============================================================ //


// =============== Ejercicio 1 ============== //
// 1. Crear un objeto Persona //
// Enunciado: //
// Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. //
// Luego, imprime cada propiedad por separado en la consola.//

// Objeto literal: pares clave: valor entre llaves.
// La edad es un número (sin comillas) para poder operar con ella.
const persona = {

    nombre: "Jose",
    edad: 27,
    ciudad: "Bilbao"

};

// Acceso con la notación del punto
console.log(persona.nombre);   // Jose
console.log(persona.edad);     // 27
console.log(persona.ciudad);   // Bilbao


// =============== Ejercicio 2 ============== //
// 2. Modificar propiedades //
// Enunciado: //
// A partir del objeto persona anterior, cambia el valor de la propiedad ciudad
// y añade una nueva propiedad llamada profesión. Luego, imprime el objeto
// actualizado en la consola. //

// Aunque persona es const, sus propiedades sí se pueden cambiar
// (const impide reasignar la variable, no tocar lo de dentro).
persona.ciudad = "Vitoria";          // cambiar una propiedad que ya existe
persona.profesión = "Desarrollador"; // añadir una propiedad nueva

console.log(persona);   // { nombre: 'Jose', edad: 27, ciudad: 'Vitoria', profesión: 'Desarrollador' }


// =============== Ejercicio 3 ============== //
// 3. Objeto Libro //
// Enunciado: //
// Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion.
// Añade un método llamado resumen que devuelva una cadena con un resumen del libro.
// Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por
// Gabriel García Márquez en 1967." //

const libro = {

    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,

    /**
     * Devuelve una frase con el resumen del libro.
     * Usa this para coger las propiedades del propio objeto.
     * @returns {string} El resumen del libro.
     */
    resumen: function () {
        return `El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.añoPublicacion}.`;
    }

};

console.log(libro.resumen());   // El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967.


// =============== Ejercicio 4 ============== //
// 4. Array de objetos //
// Enunciado: //
// Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe
// representar un estudiante con las propiedades: nombre, edad, y notaFinal.
// Luego, recorre el array e imprime el nombre y la nota final de cada estudiante. //

const estudiantes = [
    { nombre: "Ana", edad: 22, notaFinal: 8.5 },
    { nombre: "Luis", edad: 25, notaFinal: 6 },
    { nombre: "Maider", edad: 23, notaFinal: 9.2 }
];

// for...of recorre el array y en cada vuelta "estudiante" es un objeto
for (let estudiante of estudiantes) {
    console.log(`${estudiante.nombre}: ${estudiante.notaFinal}`);
}
// Ana: 8.5 / Luis: 6 / Maider: 9.2


// =============== Ejercicio 5 ============== //
// 5. Método para calcular la edad //
// Enunciado: //
// Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método
// llamado calcularEdad que devuelva la edad actual de la persona basado en el
// año de nacimiento. //

// Se llama personaConEdad para no repetir el nombre "persona" del ejercicio 1
const personaConEdad = {

    nombre: "Ana",
    anioNacimiento: 1995,

    /**
     * Calcula la edad restando el año de nacimiento al año actual.
     * Es aproximada: no mira si ya ha cumplido años este año.
     * @returns {number} La edad en años.
     */
    calcularEdad: function () {
        let anioActual = new Date().getFullYear();   // año actual según el reloj del ordenador
        return anioActual - this.anioNacimiento;
    }

};

console.log(`${personaConEdad.nombre} tiene ${personaConEdad.calcularEdad()} años`);


// =============== Ejercicio 6 ============== //
// 6. Objeto Coche //
// Enunciado: //
// Crea un objeto llamado coche con las propiedades marca, modelo, año y
// velocidadActual. Añade un método acelerar que incremente la velocidad actual
// en 10 unidades y otro método frenar que disminuya la velocidad actual en 10
// unidades. Asegúrate de que la velocidad no sea negativa. //

const coche = {

    marca: "Seat",
    modelo: "Ibiza",
    año: 2020,
    velocidadActual: 0,

    /**
     * Sube la velocidad 10 unidades.
     * @returns {number} La velocidad después de acelerar.
     */
    acelerar: function () {
        this.velocidadActual = this.velocidadActual + 10;
        return this.velocidadActual;
    },

    /**
     * Baja la velocidad 10 unidades, sin bajar nunca de 0.
     * @returns {number} La velocidad después de frenar.
     */
    frenar: function () {
        this.velocidadActual = this.velocidadActual - 10;
        if (this.velocidadActual < 0) {      // la velocidad no puede ser negativa
            this.velocidadActual = 0;
        }
        return this.velocidadActual;
    }

};

console.log(coche.frenar());     // 0 (ya estaba parado, no baja de 0)
console.log(coche.acelerar());   // 10
console.log(coche.acelerar());   // 20
console.log(coche.frenar());     // 10
console.log(coche.frenar());     // 0
console.log(coche.frenar());     // 0 (se queda en 0)


// =============== Ejercicio 7 ============== //
// 7. Recorrer un objeto //
// Enunciado: //
// Crea un objeto producto con las propiedades nombre, precio, cantidad.
// Usa un ciclo for...in para imprimir todas las propiedades y sus valores. //

const producto = {

    nombre: "Manzana",
    precio: 0.5,
    cantidad: 50

};

// for...in da el NOMBRE de cada propiedad; el valor se saca con producto[propiedad]
for (let propiedad in producto) {
    console.log(propiedad + ": " + producto[propiedad]);
}
// nombre: Manzana / precio: 0.5 / cantidad: 50


// =============== Ejercicio 8 ============== //
// 8. Contar propiedades //
// Enunciado: //
// Crea un objeto animal con al menos cinco propiedades. Luego, escribe una
// función que cuente y devuelva el número de propiedades que tiene el objeto. //

const animal = {

    nombre: "Rex",
    especie: "perro",
    edad: 4,
    color: "marrón",
    patas: 4

};

/**
 * Cuenta las propiedades de un objeto.
 * Object.keys da un array con los nombres de las propiedades; su length es el total.
 * @param {Object} objeto - Objeto del que contamos las propiedades.
 * @returns {number} Número de propiedades.
 */
function contarPropiedades(objeto) {

    return Object.keys(objeto).length;
}

console.log(contarPropiedades(animal));   // 5
console.log(contarPropiedades({}));       // 0 (objeto vacío)


// =============== Ejercicio 9 ============== //
// 9. Objeto dentro de otro objeto //
// Enunciado: //
// Crea un objeto empresa que tenga las propiedades nombre y direccion.
// La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal.
// Luego, accede a las propiedades del objeto anidado e imprímelas. //

const empresa = {

    nombre: "Empresa de ejemplo",
    direccion: {                    // objeto anidado
        calle: "Calle Mayor 1",
        ciudad: "Vitoria",
        codigoPostal: "01001"       // texto, para no perder un cero inicial
    }

};

// Para llegar a lo anidado se encadenan los puntos
console.log(empresa.direccion.calle);          // Calle Mayor 1
console.log(empresa.direccion.ciudad);         // Vitoria
console.log(empresa.direccion.codigoPostal);   // 01001


// =============== Ejercicio 10 ============== //
// 10. Añadir métodos a objetos //
// Enunciado: //
// Crea un objeto cuentaBancaria con las propiedades titular, saldo.
// Añade métodos depositar y retirar que modifiquen el saldo según sea necesario.
// El método retirar debe asegurarse de que no se pueda retirar más dinero del
// que hay disponible. //

const cuentaBancaria = {

    titular: "Ana",
    saldo: 100,

    /**
     * Ingresa dinero en la cuenta. Solo acepta cantidades mayores que 0.
     * @param {number} cantidad - Dinero a ingresar.
     * @returns {string} Mensaje con el resultado.
     */
    depositar: function (cantidad) {
        if (cantidad > 0) {
            this.saldo = this.saldo + cantidad;
            return `Ingresados ${cantidad}. Saldo: ${this.saldo}`;
        } else {
            return "La cantidad a ingresar tiene que ser mayor que 0";
        }
    },

    /**
     * Retira dinero de la cuenta si hay saldo suficiente.
     * @param {number} cantidad - Dinero a retirar.
     * @returns {string} Mensaje con el resultado.
     */
    retirar: function (cantidad) {
        if (cantidad <= 0) {
            return "La cantidad a retirar tiene que ser mayor que 0";
        } else if (cantidad > this.saldo) {
            return `Saldo insuficiente: tienes ${this.saldo} y quieres retirar ${cantidad}`;
        } else {
            this.saldo = this.saldo - cantidad;
            return `Retirados ${cantidad}. Saldo: ${this.saldo}`;
        }
    }

};

console.log(cuentaBancaria.depositar(50));    // Ingresados 50. Saldo: 150
console.log(cuentaBancaria.retirar(30));      // Retirados 30. Saldo: 120
console.log(cuentaBancaria.retirar(120));     // Retirados 120. Saldo: 0 (justo todo el saldo)
console.log(cuentaBancaria.retirar(1));       // Saldo insuficiente
console.log(cuentaBancaria.depositar(-5));    // cantidad no válida
console.log(cuentaBancaria.retirar(0));       // cantidad no válida


// ============================================================ //
// PRÁCTICAS 1.3.9 QUE USAN OBJETOS                              //
// ============================================================ //

// ========== 1.3.9 - EJERCICIO 2 ================== //
// EJERCICIO 2 - Crea un objeto que represente un producto con las propiedades
// nombre, precio, y disponible (un booleano).
// Escribe una función que imprima la información del producto solo si está disponible.

const productoDisponible = { nombre: "Manzana", precio: 0.5, disponible: true };
const productoAgotado = { nombre: "Naranja", precio: 0.7, disponible: false };

/**
 * Imprime la información de un producto, pero solo si está disponible.
 * @param {{nombre: string, precio: number, disponible: boolean}} producto - Producto a mostrar.
 * @returns {void}
 */
function imprimirProducto(producto) {

    if (producto.disponible) {
        console.log(`${producto.nombre}: ${producto.precio} euros`);
    }
}

imprimirProducto(productoDisponible);   // Manzana: 0.5 euros
imprimirProducto(productoAgotado);      // no imprime nada


// ========== 1.3.9 - EJERCICIO 3 ================== //
// EJERCICIO 3 - Crea un array de objetos que representen libros, cada uno con
// las propiedades titulo, autor, y anio.
// Escribe una función que reciba el array y devuelva solo los libros publicados
// después del año 2000.

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
    { titulo: "1984", autor: "George Orwell", anio: 1949 },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anio: 2001 },
    { titulo: "Los Juegos del Hambre", autor: "Suzanne Collins", anio: 2008 }
];

/**
 * Devuelve los libros publicados después del año 2000 (el 2000 no cuenta).
 * @param {{titulo: string, autor: string, anio: number}[]} listaLibros - Lista de libros.
 * @returns {Object[]} Array nuevo solo con los libros posteriores al 2000.
 */
function librosDespuesDel2000(listaLibros) {

    return listaLibros.filter((libroActual) => libroActual.anio > 2000);
}

console.log(librosDespuesDel2000(libros));   // La sombra del viento y Los Juegos del Hambre
console.log(librosDespuesDel2000([]));       // []
console.log(librosDespuesDel2000([{ titulo: "Libro del 2000", autor: "Autor", anio: 2000 }]));   // [] (el 2000 no cuenta)


// ========== 1.3.9 - EJERCICIO 4 ================== //
// EJERCICIO 4 - Crea un array de objetos que representen productos, con
// propiedades nombre, precio, y categoria.
// Escribe una función que devuelva todos los productos de una categoría específica.

const productos = [
    { nombre: "Manzana", precio: 0.5, categoria: "fruta" },
    { nombre: "Leche", precio: 1.2, categoria: "lácteos" },
    { nombre: "Plátano", precio: 0.3, categoria: "fruta" },
    { nombre: "Yogur", precio: 0.6, categoria: "lácteos" }
];

/**
 * Devuelve los productos de una categoría.
 * @param {{nombre: string, precio: number, categoria: string}[]} listaProductos - Lista de productos.
 * @param {string} categoria - Categoría que buscamos (tal cual está escrita en los productos).
 * @returns {Object[]} Array nuevo con los productos de esa categoría (vacío si no hay ninguno).
 */
function productosPorCategoria(listaProductos, categoria) {

    return listaProductos.filter((productoActual) => productoActual.categoria === categoria);
}

console.log(productosPorCategoria(productos, "fruta"));      // Manzana y Plátano
console.log(productosPorCategoria(productos, "carne"));      // [] (no hay de esa categoría)
console.log(productosPorCategoria([], "fruta"));             // []


// ========== 1.3.9 - EJERCICIO 10 ================== //
// EJERCICIO 10 - Se solicitan el nombre y 2 notas de x alumnos, se almacenan en
// un array de objetos.
// 1. Sacar la media de cada alumno y almacenarlo en el objeto del alumno correspondiente.
// 2. Devolver qué alumno ha sacado la mejor media y la nota media.

/**
 * Calcula la media de las dos notas de cada alumno y la guarda en su objeto
 * (propiedad media).
 * @param {{nombre: string, nota1: number, nota2: number}[]} alumnos - Lista de alumnos.
 * @returns {Object[]} La misma lista, con la propiedad media añadida a cada alumno.
 */
function calcularMedias(alumnos) {

    for (let alumno of alumnos) {
        alumno.media = (alumno.nota1 + alumno.nota2) / 2;
    }
    return alumnos;
}

/**
 * Busca el alumno con la mejor media. Si hay empate, gana el primero de la lista.
 * Hay que haber llamado antes a calcularMedias.
 * @param {{nombre: string, media: number}[]} alumnos - Lista de alumnos con su media.
 * @returns {{nombre: string, media: number}|null} El mejor alumno, o null si la lista está vacía.
 */
function mejorAlumno(alumnos) {

    if (alumnos.length === 0) {
        return null;
    }
    let mejor = alumnos[0];                // partimos de que el primero es el mejor
    for (let i = 1; i < alumnos.length; i++) {
        if (alumnos[i].media > mejor.media) {
            mejor = alumnos[i];
        }
    }
    return mejor;
}

// Pruebas con datos ya escritos
let alumnosPrueba = calcularMedias([
    { nombre: "Ana", nota1: 8, nota2: 6 },       // media 7
    { nombre: "Luis", nota1: 5, nota2: 5 },      // media 5
    { nombre: "Maider", nota1: 9, nota2: 10 }    // media 9.5
]);
console.log(alumnosPrueba);
let ganadorPrueba = mejorAlumno(alumnosPrueba);
console.log(`Mejor media: ${ganadorPrueba.nombre} con ${ganadorPrueba.media}`);   // Maider con 9.5
console.log(mejorAlumno([]));   // null (lista vacía)

// Parte interactiva: pedimos cuántos alumnos y, de cada uno, nombre y 2 notas.
let textoCantidad = prompt("Ejercicio 10 (1.3.9): ¿cuántos alumnos vas a introducir?");
let cantidadAlumnos = Number(textoCantidad);

if (textoCantidad === null || textoCantidad === "" || isNaN(cantidadAlumnos) || cantidadAlumnos < 1 || cantidadAlumnos % 1 !== 0) {
    console.log("Ejercicio 10 (1.3.9): hay que escribir un número entero de alumnos, 1 o más.");
} else {
    let listaAlumnos = [];
    for (let i = 1; i <= cantidadAlumnos; i++) {
        let nombre = prompt(`Alumno ${i}: nombre`);
        let texto1 = prompt(`Alumno ${i}: primera nota`);
        let texto2 = prompt(`Alumno ${i}: segunda nota`);
        // Si alguna nota no es un número válido, saltamos a este alumno sin guardarlo
        if (nombre === null || nombre === "" || texto1 === null || texto1 === "" || texto2 === null || texto2 === "" ||
            isNaN(Number(texto1)) || isNaN(Number(texto2))) {
            console.log(`Alumno ${i}: datos no válidos, no se guarda.`);
        } else {
            listaAlumnos.push({ nombre: nombre, nota1: Number(texto1), nota2: Number(texto2) });
        }
    }

    calcularMedias(listaAlumnos);
    console.log(listaAlumnos);
    let mejor = mejorAlumno(listaAlumnos);
    if (mejor === null) {
        console.log("No se ha guardado ningún alumno válido.");
    } else {
        console.log(`Mejor media: ${mejor.nombre} con ${mejor.media}`);
    }
}
