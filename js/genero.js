let personas = parseInt(prompt("Ingrese la cantidad de personas "))

let femenino= "f";
let masculino= "m";
let genero;
let inicio=0;
let countMujer=0;
let countHombre=0;

while (inicio < personas) {

     genero = prompt("ingrese el genero de personas");

     if (genero == femenino){
        countMujer = countMujer + 1;

     }else if(genero == masculino){
      countHombre = countHombre + 1

     }

    inicio++
    
}

console.log("La cantidad de mujeres",countMujer)
console.log("la cantidad de hombres", countHombre)

