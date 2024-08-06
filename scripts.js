// fizzbuzz

// divisivel por 3 = fizz 
// divisivel por 5 = buzz
// divisivel pelos 2 = fizzbuzz
// nao divisivel por 3 ou 5 = entrada
// se não é numero retornar mensagem não é numero

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