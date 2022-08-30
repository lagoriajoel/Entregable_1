


        // metodo fetch para la solicitud de datos en el archivo datos.json
            
              
            fetch('datos.json')
            .then(response => response.json())
            .then(data => { console.log(data)
            
            mostrarCards(data)
            
            })
      
          
              // metodo que muestra las card en el html
             const mostrarCards=(data)=>{
              for (let i of data) {
                
                //creamos un card para mostrar el producto del menu
                let card = document.createElement("div");
              
                //se agrega a las cards las clases "card","tipode hamburgesa",y "hide" para ocultarlas inicialmente
                card.classList.add("card", i.tipo, "hide");
                //cremaos un div imgcontainer
                let imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");
                //img tag
                let image = document.createElement("img");
                image.setAttribute("src", i.img);
                imgContainer.appendChild(image);
                card.appendChild(imgContainer);
                //container
                let container = document.createElement("div");
                container.classList.add("container");
                //nombre producto
                let name = document.createElement("h5");
                name.classList.add("nombreProducto");
                name.innerText = i.nombre.toUpperCase();
                container.appendChild(name);
                //precio
                let price = document.createElement("h5");
                price.innerText = "$" + i.precio;
                container.appendChild(price);
                card.appendChild(container);
                document.getElementById("cards").appendChild(card);
                //descripcion
                let descripcion = document.createElement("h6");
                descripcion.innerText =   i.descripcion;
                container.appendChild(descripcion);
                card.appendChild(container);
                document.getElementById("cards").appendChild(card);
                //botom addcarrito
                let addCarrito = document.createElement("div");
                addCarrito.innerHTML = `<button type='button' class='addcarrito' onclick=\"addCarrito(${i.id});\">Agregar al Carrito</button>`;
                
                container.appendChild(addCarrito);
              
                card.appendChild(container);
                document.getElementById("cards").appendChild(card);
              }
             }
              
              //agregamos el metodo addEventListener a los botones de filtrado

              let btnTodas = document.getElementById("btnTodas");
              let btnSimple = document.getElementById("btnSimple");
              let btnDoble = document.getElementById("btnDoble");
              let btnVeggie = document.getElementById("btnVeggie");
              btnTodas.addEventListener("click", () =>filterProduct('todas'));
              btnSimple.addEventListener("click", () =>filterProduct('simple'));
              btnDoble.addEventListener("click", () =>filterProduct('doble'));
              btnVeggie.addEventListener("click", () =>filterProduct('veggie'));


              function filterProduct(value) {
                //traemos los botones
                let buttons = document.querySelectorAll(".btnFiltro");
                buttons.forEach((button) => {
                  //check si el valor es igual al texto
                  if (value.toUpperCase() == button.innerText.toUpperCase()) {
                    button.classList.add("active");
                  } else {
                    button.classList.remove("active");
                  }
                });
                //seleccionamos todas las card
                let elements = document.querySelectorAll(".card");
                
                //iteramos


                elements.forEach((element) => {

                // aplicacion de operadores ternarios

                  value == "todas" ?  element.classList.remove("hide") :  element.classList.contains(value) ? element.classList.remove("hide"): element.classList.add("hide");
                   
                  
                });
              }
            
              //mostramos inicialmente todos los productos
              window.onload = () => {
                filterProduct("todas");
              };

              // creamos un array para el carrito
              carrito=[];
              // funcion para agragar productos al carrito
             
              
              function addCarrito(id){

                fetch('datos.json')
                .then(response => response.json())
                .then(data => { console.log(data)
                
                  let productoAgregado=data.find(elem => elem.id==id);
                  let productoenCarrito=carrito.find(elem => elem.id==id);
                  console.log(carrito);
                  if (productoenCarrito == undefined){
                    carrito.push(productoAgregado);
                   
                    //Cargar al storage
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                    Swal.fire({
                        title: "Ha agregado el producto",
                     
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                        confirmButtonText:"Entendido",
                    })
                }else{
                  
                    Swal.fire({
                                title: "Producto ya agregado",
                              
                                icon: "info",
                                timer:4000,
                                confirmButtonText:"Aceptar",
                                confirmButtonColor: 'green',
                                
                               })
                       }       
                   })    
                }

             

              let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []
              console.log(productosEnCarrito);

              function mostrarCarrito(){

          
                let bodyModal= document.getElementById("bodyModal");
                bodyModal.classList.add("bodyModal");
                bodyModal.innerHTML = " "  
                
                  
                 
                for (let i of productosEnCarrito) {

                       console.log(i.nombre);
                      //creamos un card para mostrar el producto que agramos
                      let card = document.createElement("div");
                      
                      //se agrega a las cards las clases "card",
                      card.classList.add("cardCarrito");
                      //cremaos un div imgcontainer
                      let imgContainer = document.createElement("div");
                      imgContainer.classList.add("imgCarrito");
                      //img tag
                        let image = document.createElement("img");
                        image.setAttribute("src", i.img);
                        imgContainer.appendChild(image);
                        card.appendChild(imgContainer);
              
                      let container = document.createElement("div");
                      container.classList.add("containerCarrito");
                      //nombre producto
                      let name = document.createElement("h5");
                      name.classList.add("nombreProducto");
                      name.innerText = i.nombre.toUpperCase();
                      container.appendChild(name);
                      //precio 
                      let price = document.createElement("h5");
                      price.innerText = "$" + i.precio;
                      
                      container.appendChild(price);
                      card.appendChild(container);
                      //container botones
                    
                      let Eliminar = document.createElement("button");
                      Eliminar.classList.add("botonEliminar");
                      Eliminar.innerText = "Eliminar";

                     
                      card.appendChild(Eliminar)
    
                      bodyModal.appendChild(card);
                   
                }
                
                totalcarrito(productosEnCarrito)
                  //container botones
                  let contenedorBotones = document.createElement("div");
                  contenedorBotones.classList.add("contenedorBotones")
                  let botonConfirmar = document.createElement("button");
                  botonConfirmar.classList.add("botonConfirmar");
                  botonConfirmar.innerText = "Realizar Pedido";

                  let botonCancelar= document.createElement("button");
                  botonCancelar.classList.add("botonCancelar");
                  botonCancelar.innerText = "Cancelar Pedido";

                  contenedorBotones.appendChild(botonConfirmar);
                  contenedorBotones.appendChild(botonCancelar);

                  bodyModal.appendChild(contenedorBotones)
             
              } 
  
              //funcion para calcular el total del carrito 
           function totalcarrito(productosEnCarrito){
                //metodo para calcular el total del carrito de compras
                const resultado= productosEnCarrito.reduce((acc, item)=>{

                  return acc + item.precio;
                },0);
              // creamos un contenedor para el total del carrito de compras
                const containerResultado= document.createElement("div");
               
                let total = document.createElement("h5");
              
                total.innerText = "Total a Pagar: " + resultado;
                containerResultado.appendChild(total);
                let containerCart = document.getElementById("footerMod");
                containerCart.innerHTML="";
                containerCart.appendChild(containerResultado);
              }

            //boton cerrar modal
            let cerrar = document.querySelectorAll(".close")[0];
            let abrir = document.querySelectorAll(".btnmostrarCart")[0];
            let modal = document.querySelectorAll(".modal")[0];
            let modalCont = document.querySelectorAll(".conteinerCart")[0];
            
            //mostrar modal
            abrir.addEventListener("click", function (e) {
            e.preventDefault();

            if(productosEnCarrito.length >0){

            setTimeout(function () {

            modalCont.style.opacity = "1";
            modalCont.style.visibility = "visible";
            modal.classList.toggle("modal-close");
             
            mostrarCarrito();
            })}
            else{Swal.fire({
              title: 'El Carrito esta vacio',
              text: '',
              icon: 'warning',
              confirmButtonText: 'volver'
            })}

            });
            //cerrar modal
            cerrar.addEventListener("click", function () {
              modal.classList.toggle("modal-close");
             
              setTimeout(function () {  
                modalCont.style.opacity = 0;
                modalCont.style.visibility = "hidden";
              },900);

            });
            // cerrar al hacer clic por fuera del modal
            window.addEventListener("click", function (e) { 

              if (e.target==modalCont) {
                modal.classList.toggle("modal-close");
             
              setTimeout(function () {  
                modalCont.style.opacity = 0;
                modalCont.style.visibility = "hidden";
              },900);
              }
            }); 


             

         

           


      
      

     

