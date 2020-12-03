//Boolean
let muted: boolean = true;
muted = false;

//Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//String 
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [];
people = [Isabel, Raul, Nicole];
// people.push("600")

let peopleAndNumbers : Array <string | number> = []
peopleAndNumbers.push(`ricarado`)
peopleAndNumbers.push(200)


//Enum
//Declarar en string el nombre del elemento, obliga a 
//typeScript a entenderlo como string y no como numero
enum Color {
    Rojo = 'Rojo' ,
    Verde = "Verde",
    Azul = "Amarillo",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`)

//Any

let comodin:  any =  "Joker";
comodin = {type:  "wildCard"}

// Object
let someObject : object =  {type:  "wildCard"}

//Funciones
//Se añade el :number a los parametros de la func para determinar
//el tipo de dato que retorna
function add (a: number, b: number): number{
    return a+ b;
}

const sum = add(4, 6);
//Se añade el (number)=>number para declarar que en primera instancia
//devuelve un número y despues una funciòn que retorna otro número
function createAdder(a: number): (number)=> number{
    return function(b:number){
        return b + a;
    }
}

const addFour =  createAdder(4);
const fourPlus =  addFour(6);
//Si se quiere que uno de los parametro sea opcional se añado un simbolo
//de pregunta previo a los dos puntos que finalizan en la declaraciòn del 
//parametro, si se quiere asignar un valor default, se le asigna a través
//del ="Lo que quieras poner por deafult"
function fullName(firstName: string, lastName: string = "No reportado"): string{
    return `${firstName} ${lastName}`;
}

const Nel = fullName('Nelson')
console.log(Nel)

//Interfaces

// enum Color {
//     rojo = 'Rojo',
//     verde= 'Verde',
// }

interface rectangulo{
    ancho: number;
    alto: number;
    color ?: Color,
}

let rect : rectangulo = {
    ancho:4,
    alto:6,
    color: Color.Rojo,
}
function area (r: rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString =  function (){
    return this.Color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
}

console.log(rect.toString)

