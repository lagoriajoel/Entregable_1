const  hamb=prompt("seleccione una hamburgesa (ingrese un numero del 1 al 4)");


const menu = {
    1:{
       nombre: "hamburgesa con queso",
       precio: 800
    },
   
    2:{
       nombre: "hamburgesa completa",
       precio: 1500
    },
    3:{
      nombre: "hamburgesa con Bacon",
      precio: 1500
   },
   4:{
      nombre: "hamburgesa doble",
      precio: 1800
   }
   
   
   }

   
  const hamburgesa= { nombre: menu[hamb].nombre, precio: menu[hamb].precio }
   

switch (hamb) {
    case "1": alert   (`selecciono ${menu[hamb].nombre}`); break;
    case "2": alert   (`seleccione ${menu[hamb].nombre}`); break;    
    case "3": alert   (`seleccione ${menu[hamb].nombre}`); break;
    case "4": alert   (`seleccione ${menu[hamb].nombre}`); break;
}
const  cantidad=prompt("seleccione la cantidad");

alert(pedido(hamburgesa, cantidad)); 

function pedido (hamburgesa, cantidad){

  let total = hamburgesa.precio * cantidad 
  return `Su pedido es ${cantidad} - ${hamburgesa.nombre} total a pagar: $ ${total}`

}


