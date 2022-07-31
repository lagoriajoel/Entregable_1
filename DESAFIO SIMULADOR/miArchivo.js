//const  hamb=prompt("seleccione una hamburgesa (ingrese un numero del 1 al 4)");


   //function eleccionMenu() {

   
  
//}


const CARRITO = [];

   const menu = [
                  {
                     nombre: "hamburgesa Clasica",
                     precio: 800,
                     ingredientes : ["lechuga", "mayonesa", "tomate","queso","huevo","papas fritas"]
                  },
                  
                  {
                     nombre: "hamburgesa chesse",
                     precio: 900,
                    ingredientes : ["chedar x2", "mayonesa", "cebolla en cubos","ketchup","papas fritas"]

                  },
                  {
                     nombre: "hamburgesa yankke",
                     precio: 1000,
                    ingredientes : ["chedar x2", "bacon x2", "pepinillos","barbacoa","papas fritas"]

                  },
                  {
                     nombre: "hamburgesa criolla",
                     precio: 1200,
                    ingredientes : ["mayonesa de apio", "chimichurro", "mollejas al limon","papas fritas"]


                  },
                  {
                     nombre: "hamburgesa Mexicana",
                     precio: 1200,
                    ingredientes : ["chedar x2", "bacon x2", "guacamole","mayonesa ranchera","papas fritas"]

                  }
   
                ]

        function tomarPedido(){

                                 const eleccion = prompt(`
                                 Por favor eliga el numero segun corresponda 
                                 a su Hamburguesa :
                                 1. Nombre: ${menu[0].nombre}
                                 Precio: ${menu[0].precio}
                                 Ingredientes: ${menu[0].ingredientes}

                                 2. Nombre: ${menu[1].nombre}
                                 Precio: $${menu[1].precio}
                                 Ingredientes: ${menu[1].ingredientes}

                                 3. Nombre: ${menu[2].nombre}
                                 Precio: $${menu[2].precio}
                                 Ingredientes: ${menu[2].ingredientes}

                                 4. Nombre: ${menu[3].nombre}
                                 Precio: $${menu[3].precio}
                                 Ingredientes: ${menu[3].ingredientes}

                                 5. Nombre: ${menu[4].nombre}
                                 Precio: $${menu[4].precio}
                                 Ingredientes: ${menu[4].ingredientes}

                              `)

                               mostrarEleccion(eleccion)  
                               
                        cantidadIngresada = prompt("Ingrese la cantidad");
                               
                                 

                        const pedido= { nombre: menu[eleccion-1].nombre, precio: menu[eleccion-1].precio , ingredientes: menu[eleccion-1].ingredientes, cantidad: cantidadIngresada}
                        CARRITO.push(pedido);

                        seguirComprando = prompt("Queres seguir comprando ?? si/no").toLowerCase();

                        if (seguirComprando === "si") {
                            tomarPedido()
                        } else {
                            alert(` Gracias por su compra!!!
                                   Total de la compra es : ${totalDeLaCompra()}`);
                        }

                     
                      
                
        }
   
        tomarPedido()
      
        function totalDeLaCompra(){

         let total = 0;
         for(let i = 0; i < CARRITO.length; i++){
             total += CARRITO[i].precio * parseInt(CARRITO[i].cantidad);
         }
         return total; }

       
         
       
        function mostrarEleccion(eleccion){

         switch (eleccion) {
         case "1": alert   (`selecciono ${menu[eleccion-1].nombre}
            precio:${menu[eleccion-1].precio}
            ingredientes:${menu[eleccion-1].ingredientes}`)
            break;
         case "2":  alert   (`selecciono ${menu[eleccion-1].nombre}
            precio:${menu[eleccion-1].precio}
            ingredientes:${menu[eleccion-1].ingredientes}`)
            break;   
         case "3": alert   (`selecciono ${menu[eleccion-1].nombre}
            precio:${menu[eleccion-1].precio}
            ingredientes:${menu[eleccion-1].ingredientes}`) 
            break;
         case "4":  alert   (`selecciono ${menu[eleccion-1].nombre}
            precio:${menu[eleccion-1].precio}
            ingredientes:${menu[eleccion-1].ingredientes}`)
            break;
         case "5":  alert   (`selecciono ${menu[eleccion-1].nombre}
            precio:${menu[eleccion-1].precio}
            ingredientes:${menu[eleccion-1].ingredientes}`)
            break;

         }

         }

         console.log(CARRITO);
      
      

     

