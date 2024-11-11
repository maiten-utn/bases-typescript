'use strict';
//HOLA MUNDO
console.log('Hola mundo, mi primer programa en TS');
//DATOS PRIMITIVOS
let estudiasteJavaScript = true;
if (estudiasteJavaScript) {
    console.log('Podes seguir viendo este curso de TypeScript');
}
else {
    console.log('Primero tenes que ver el curso de JavaScript');
}
//NUMBERS
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('EMPATE');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
//ANY (EVITARLO)
let disney;
disney = 'Star Wars y Marvel';
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
//ARRAYS
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['HTML', 'CSS', 'JS'];
arregloNumeros[0];
arregloTexto[0].indexOf('HTML');
let programador = {
    nombre: 'Maiten Oviedo',
    edad: 39,
    habilidades: ['Java', 'HTML', 'CSS', 'JS'],
    tomaMate: true,
};
let programador2 = {
    nombre: 'Carlos',
    edad: 30,
    habilidades: ['HTML', 'Cobol'],
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador);
enviarCurriculum(programador2);
//CLASES Y POO
class ClassPersona {
    constructor(nombre, edad, trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }
}
let persona2 = new ClassPersona('Maiten', 25, true);
//GENÉRICOS Y ENCAPSULAMIENTO
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Maiten Oviedo');
sorteo.setNumero(7);
console.log(sorteo.sortear());
