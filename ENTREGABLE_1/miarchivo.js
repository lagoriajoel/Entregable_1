

const mensaje = "Preograma que devuelve la suma desde cero hasta el numero ingresado por el usuario.";
alert(mensaje);
const Numero =parseInt(prompt("Ingrese el numero elegido: "))
let suma=0;

for (let i=0; i<=Numero; i++) { 

    suma += i;
}

alert(`la Suma desde cero hasta el numero: ${Numero} es : ${suma}`);
