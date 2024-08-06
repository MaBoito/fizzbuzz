const resultado = fizzbuzz(15);
console.log(resultado);

function fizzbuzz(entrada){
    if ( typeof entrada !== "number")
        return "Não é um número";
    if(entrada %3 ===0 && entrada %5 ===0)
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "fizz";
    if (entrada % 5 === 0)
        return "buzz";

    return entrada;
    
}