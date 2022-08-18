


            const menu = {
                datos: [
                  {
                    id:1, 
                    nombre: "hamburgesa Clasica",
                     precio: 800,
                     ingredientes : ["lechuga", "mayonesa", "tomate","queso","huevo","papas fritas"],
                     tipo: "simple",
                     img: 'images/clasica.jpg'
                  },
                  
                  {
                    id:2, 
                     nombre: "hamburgesa chesse",
                     precio: 900,
                    ingredientes : ["chedar x2", "mayonesa", "cebolla en cubos","ketchup","papas fritas"],
                    tipo: "simple",
                    img: 'images/chesse.jpg'
              
                  },
                  {id:3, 
                     nombre: "hamburgesa yankke",
                     precio: 1000,
                    ingredientes : ["chedar x2", "bacon x2", "pepinillos","barbacoa","papas fritas"],
                    tipo: "simple",
                    img: 'images/yankee.jpg'
              
              
                  },
                  {
                    id:4, 
                    nombre: "hamburgesa criolla",
                    precio: 1200,
                    ingredientes : ["mayonesa de apio", "chimichurro", "mollejas al limon","papas fritas"],
                    tipo: "simple",
                    img: "images/criolla.jpg"
              
              
              
                  },
                  {
                    id:5, 
                    nombre: "hamburgesa Mexicana",
                    precio: 1200,
                    ingredientes : ["chedar x2", "bacon x2", "guacamole","mayonesa ranchera","papas fritas"],
                    tipo: "simple",
                    img: 'images/mexicana.jpg'
              
              
                  },
                  {
                    id:6, 
                     nombre: "hamburgesa Clasica MAX",
                     precio: 1800,
                     ingredientes : ["lechuga", "mayonesa", "tomate","queso","huevo","papas fritas"],
                     tipo: "doble",
                     img: 'images/doble.jpg'
                  },
                  
                  {
                    id:7, 
                    nombre: "hamburgesa chesse MAX",
                    precio: 1900,
                    ingredientes : ["chedar x2", "mayonesa", "cebolla en cubos","ketchup","papas fritas"],
                    tipo: "doble",
                    img: 'images/doble.jpg'
              
                  },
                  {
                    id:8, 
                    nombre: "hamburgesa yankke MAX",
                    precio: 1800,
                    ingredientes : ["chedar x2", "bacon x2", "pepinillos","barbacoa","papas fritas"],
                    tipo: "doble",
                    img: 'images/doble.jpg'
              
              
              
                  },
                  {
                    id:9, 
                    nombre: "hamburgesa criolla MAX",
                    precio: 1800,
                    ingredientes : ["mayonesa de apio", "chimichurro", "mollejas al limon","papas fritas"],
                    tipo: "doble",
                    img: 'images/doble.jpg'
              
              
              
              
                  },
                  {
                    id:10, 
                    nombre: "hamburgesa Veggie",
                    precio: 1200,
                    ingredientes : ["chedar", "pepinillos", "mayonesa de apio","papas fritas"],
                    tipo: "veggie",
                    img: 'images/veggie.jpg'
              
              
                  }
              
                ],}
        

            for (let i of menu.datos) {
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
                descripcion.innerText =   i.ingredientes.join(" ");
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
              //
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
                
                  if (value == "todas") {
                    element.classList.remove("hide");
                  } else {
                
                    if (element.classList.contains(value)) {
                   
                      element.classList.remove("hide");
                    } else {
                    
                      element.classList.add("hide");
                    }
                  }
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
                let prod=menu.datos.find(elem => elem.id==id);
                carrito.push(prod);
                console.log(carrito);
                localStorage.setItem("carrito", JSON.stringify(carrito));

              
               
               
               
              }

           

              function mostrarCarrito(){

                if (carrito.length > 0) {
                  
                 
                for (let i of carrito) {
                  
                      //creamos un card para mostrar el producto que agramos
                      let card = document.createElement("div");
                      
                      //se agrega a las cards las clases "card",
                      card.classList.add("card");
                      //cremaos un div imgcontainer
                      let imgContainer = document.createElement("div");
                    
                      
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
                  
                      //descripcion
                      
                      card.appendChild(container);
                      document.getElementById("conteinerCart").appendChild(card);
            

                }
               //metodo para calcular el total del carrito de compras
                const resultado= carrito.reduce((acc, item)=>{

                  return acc + item.precio;
                },0);
               // creamos un contenedor para el total del carrito de compras
                const containerResultado= document.createElement("div");
                let total = document.createElement("h5");
                total.classList.add("nombreProducto");
                total.innerText = "Total a Pagar: " + resultado;
                containerResultado.appendChild(total);
                conteinerCart.appendChild(containerResultado);
              } 
              else {
                alert("No hay Productos en el carrito")
              }

              }

             

         

           


      
      

     

