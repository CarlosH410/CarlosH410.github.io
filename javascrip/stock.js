


const datos = {
    methods: {
        find: (id) => {
            return datos.items.find((item) => item.id === id );
        },
        remove:(items) => {
            items.forEach((item) => {
                const product = datos.methods.find(item.id);
                product.cantidad = product.cantidad - item.cantidad;
                
            });

            console.log(datos);
        }, 
    },
    items: [ 
        {   id : 0,
            
            nombre : "Remera",
            tipo : "remera",
            cantidad :10,
            precio : 1200,
            talle : 1,
            img :"/javascrip/img/0.jpg" ,
        },
        
        {id : 1,
            nombre : "Buso",
            tipo : "buso",
            cantidad :10,
            precio : 1200,
            talle : 2,
            img :"/javascrip/img/1.jpg" ,
        },


        {id : 2,
            nombre : "Zapatillas",
            tipo : "zapatillas",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/2.jpg" ,
        },

        {id : 3,
            nombre : "Campera",
            tipo : "campera",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/3.jpg" ,
        },

        {id : 4,
            nombre : "Gorra",
            tipo : "gorra",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/4.jpg" ,
        },

        {id : 5,
            nombre : "Mochila",
            tipo : "mochila",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/5.jpg" ,
        },

        {id : 6,
            nombre : "Cargo",
            tipo : "cargo",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/6.jpg" ,
        },

        {id : 7,
            nombre : "Anteojos",
            tipo : "anteojos",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/7.jpg" ,
        },

        {id : 7,
            nombre : "zapatillas",
            tipo : "zapatillas",
            cantidad :10,
            precio : 1200,
            talle : 40,
            img :"/javascrip/img/2.jpg" ,
        }


    ]
};

const productCart = {
    items: [],
    methods: {
        add: (id, cantidad) => {
            const cartItem = productCart.methods.get(id);

            if (cartItem){
                if (productCart.methods.hasInventory(id,cantidad + cartItem.cantidad)) {
                    cartItem.cantidad ++;
                }else{
                    alert("NO MAS PERRROO JAJA");
                }
            }else{
               productCart.items.push({id, cantidad}); 
            }
        },
        remove: (id) => {
            const cartItem = productCart.methods.get(id);

            if (cartItem.cantidad - 1 > 0 ) {
                cartItem.cantidad --;
            }else{
            productCart.items = productCart.items.filter(
                (item) => item.id !== id);
            }
        },
        count: () => {
            return productCart.items.reduce((acc,item)=> acc + item.cantidad, 0);
        },
        get: (id)=> {
            const index = productCart.items.findIndex((item) => item.id === id);
            return index >= 0 ? productCart.items[index] : null;
        },   
        getTotal: () => {
            let total = 0
            productCart.items.forEach((item)=> {
                const found = datos.methods.find(item.id);
                total += found.precio * item.cantidad;
            });
            return total;
        },
        hasInventory: (id, cantidad) => {
            return datos.items.find(item => item.id === id).cantidad - cantidad >= 0;

        },
        purchase: ()=> {
            datos.methods.remove(productCart.items); 
            productCart.items = []
            

        },
    },

};

renderProduct();

function renderProduct (){
    const html = datos.items.map ((item) => {
        return `
        <div class="card" >
            <img src="${item.img}" class="card-img-top" alt="...">
            
                
                <div class="item">
                
                
               
                
                <div class="nombre">${item.nombre}</div>
                <div class="precio">${numberToCurrency(item.precio)}</div>
                <div class="cantidad">${item.cantidad} units</div>
                
               
                <div class="actions">
                    <button class= "add" data-id="${
                    item.id}">comprar</button>
                
                </div>
            </div>    

         </div>

    </div>
              
        `;
    }) 

    document.querySelector("#product-container").innerHTML = html.join("")

    document.querySelectorAll(".item .actions .add").forEach((button) => {
        button.addEventListener("click", (e) => {
          const id = parseInt(button.getAttribute("data-id"));
          const item = datos.methods.find(id);
    
          if (item && item.cantidad - 1 > 0) {
            productCart.methods.add(id, 1);
            console.log(datos, productCart);
            renderProductCart();
          } else {
            alert("Ya no hay mas perrooo jaja");
          }
        });
    });
    
    
}

function numberToCurrency(n) {
    return new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 2,
        style: "currency",
        currency: "USD",
    }).format(n)
}



function renderProductCart() {
    const html = productCart.items.map((item) => {
      const datosItem = datos.methods.find(item.id);
      return `
            <div class="item">
                <div class="nombre">${datosItem.nombre}</div>
                <div class="precio">${numberToCurrency(datosItem.precio)}</div>
                <div class="cantidad">${item.cantidad} units</div>
                <div class="subtotal">Subtotal: ${numberToCurrency(
                    item.cantidad * datosItem.precio
                )}</div>
                <div class="actions">
                    <button class="addOne" data-id="${datosItem.id}">+</button>
                    <button class="removeOne" data-id="${datosItem.id}">-</button>
                </div>
            </div>
        `;
    });
    const closeButton = `
    <div class="cart-header">
      <button class="bClose">cerrar</button>
    </div>`;
    const purchaseButton = productCart.items.length > 0
    ? `
    <div class="cart-actions">
        <button id="bPurchase">Terminar compra</button>
    </div>
    `
        : "";
    const total = productCart.methods.getTotal();
    const totalContainer = `<div class="total">Total: ${numberToCurrency(total)}</div>`;
    
    const artCartContainer = document.querySelector("#art-cart-container");
     
    artCartContainer.classList.remove("hide");
    artCartContainer.classList.add("show");

    artCartContainer.innerHTML = closeButton + html.join("") + totalContainer + purchaseButton;
  
    document.querySelector("#art-cart-container").classList.remove("hide");
    document.querySelector("#art-cart-container").classList.add("show");
  
    document.querySelectorAll(".addOne").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = parseInt(button.getAttribute("data-id"));
        productCart.methods.add(id, 1);
        renderProductCart();
      });
    });
  
    document.querySelectorAll(".removeOne").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = parseInt(button.getAttribute("data-id"));
        productCart.methods.remove(id, 1);
        renderProductCart();
      });
    });
  
    document.querySelector('.bClose').addEventListener("click", (e) => {
      artCartContainer.classList.remove("show");
      artCartContainer.classList.add("hide");
      
       
    });
    const bPurchase = document.querySelector("#bPurchase");
    if (bPurchase) {
      bPurchase.addEventListener("click", (e) => {
        productCart.methods.purchase();
        
        renderProduct();
        renderProductCart ();
        
        
        
        
       

      });
    }
}



//local estore