'use strict'

//HOLA MUNDO
console.log('Hola mundo, mi primer programa en TS')

//DATOS PRIMITIVOS
let estudiasteJavaScript = true
if (estudiasteJavaScript) {
  console.log('Podes seguir viendo este curso de TypeScript')
} else {
  console.log('Primero tenes que ver el curso de JavaScript')
}

//NUMBERS
let interMiami = 11
let fcDallas = 11
let messi = 1
let juegaMessi = true
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
  let motivo = ''
  if (juegaMessi) {
    equipo1 += messi
    motivo = 'porque juega Messi'
  }
  if (equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
  if (equipo1 == equipo2) console.log('EMPATE')
  if (equipo1 < equipo2) console.log('Gana FC Dallas')
}
jugar(interMiami, fcDallas, juegaMessi)

//ANY (EVITARLO)
let disney
disney = 'Star Wars y Marvel'
console.log(disney)
disney = 15000000
console.log(disney)
disney = true
console.log(disney)
//ARRAYS
let arregloNumeros = [1, 2, 3, 4, 5, 6]
let arregloTexto = ['HTML', 'CSS', 'JS']
arregloNumeros[0]
arregloTexto[0].indexOf('HTML')

// OBJETOS
type Programador = {
  nombre: string
  edad: number | null
  habilidades: string[]
  tomaMate?: boolean
}
let programador: Programador = {
  nombre: 'Maiten Oviedo',
  edad: 39,
  habilidades: ['Java', 'HTML', 'CSS', 'JS'],
  tomaMate: true,
}
let programador2: Programador = {
  nombre: 'Carlos',
  edad: 30,
  habilidades: ['HTML', 'Cobol'],
}
function enviarCurriculum(programador: Programador) {
  console.log(`Este curriculum es de ${programador.nombre}`)
}
enviarCurriculum(programador)
enviarCurriculum(programador2)

//CLASES Y POO
class ClassPersona {
  private nombre: string
  private edad: number
  private trabajo: boolean

  constructor(nombre: string, edad: number, trabajo: boolean) {
    this.nombre = nombre
    this.edad = edad
    this.trabajo = trabajo
  }
}
let persona2 = new ClassPersona('Maiten', 25, true)

//GENÉRICOS Y ENCAPSULAMIENTO
class Sorteo<T> {
  //Encapsulamiento
  private ticket?: T
  constructor(private nombre: string) {}
  setNumero(ticket: T) {
    this.ticket = ticket
  }
  getNumero() {
    return this.ticket
  }
  getNombre() {
    return this.nombre
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }
}
let sorteo = new Sorteo<number>('Maiten Oviedo')
sorteo.setNumero(7)
console.log(sorteo.sortear())
