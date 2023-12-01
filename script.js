alert("ola essa é uma tividade da rocketseat");
alert("calculadora");

let numberONE = prompt("digite um numero  : ")
let numberTwo = prompt("digite outro numero : ")

let transformONE = Number(numberONE);
let transformeTwo =  Number(numberTwo); 


let soma = transformONE + transformeTwo;

let sub = transformONE - transformeTwo;

let mult = transformONE * transformeTwo;

let div = transformONE / transformeTwo;

let resto = transformONE % transformeTwo;




alert("soma: "+soma)
alert("subtração: "+sub)
alert("multiplicação: "+mult)
alert("divisão: "+div)
alert("resto da divisão: "+resto);



if(numberONE %2 !== 0 && numberONE %2 !==0 ){

    alert("os dois nummeros digitados são impares")


}else if(numberONE %2 ===0 && numberTwo %2 ===0){

   alert('os nummeros digitados são pares')

}else{

    alert("um numrero é par o outro é impar")
};




if(numberONE==numberTwo){
 
    alert("os numeros inseridos são iguais")
    
}
else if(numberONE!==numberTwo){

    alert("os numeros inseridos são diferentes")

};

