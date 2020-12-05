//Boolean
let muted: boolean = true;
muted = false;
//muted = "callado" ;//-->Error

//N�meros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Jes�s";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
//people.push(900); //-->Error de tipo
people.push("900"); //ok

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Jes�s");
peopleAndNumbers.push(900);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito : Color = Color.Amarillo;
console.log(`Mi color favorito es: ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = {type: "WildCard"};

//Object
let someObject: object = {type: "WildCard"};