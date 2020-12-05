//Boolean
let muted: boolean = true;
muted = false;
//muted = "callado" ;//-->Error

//Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Jesús";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
//people.push(900); //-->Error de tipo
people.push("900"); //ok

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Jesús");
peopleAndNumbers.push(900);

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Amarillo;
//console.log(`Mi color favorito es: ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = { type: "WildCard" };

//Object
let someObject: object = { type: "WildCard" };

/*********************Funciones*********************/
function add(a: number, b: number): number {
  return a + b;
}
const sum = add(4, 6);

//Una funcion que retorna otra funcion, con el arrow lo indicamos
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}
const addFour = createAdder(4);
const fourPlus = addFour(6);

//funcion con parametros opcionales "?" el argumento puede venir undefined o con
//un valor por omision, o incluso poder marcarlo por defecto en caso de que falte
function fullName(firstName: string, lastName: string = 'Perez'): string {
  return `${firstName} ${lastName}`;
}
//const jesus = fullName('Jesus', 'Arevalo');
const jesus = fullName("Jesus");
console.log(jesus);
