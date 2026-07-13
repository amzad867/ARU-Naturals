/*
================================================
        ARU NATURALS
        CART-PAGE.JS
        Cart Page Control
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const cartContainer =
    document.querySelector(".cart-items");


    const totalPrice =
    document.querySelector(".cart-total");



    if(!cartContainer){

        return;

    }



    let cart =
    JSON.parse(localStorage.getItem("aruCart")) || [];



    renderCart();




    /*
    ==============================
        Render Cart
    ==============================
    */


    function renderCart(){


        cartContainer.innerHTML = "";



        if(cart.length === 0){


            cartContainer.innerHTML =
            `
            <div class="empty-cart">

                <h3>Your cart is empty</h3>

                <p>
                Start shopping and add your favorite
                ARU Naturals products.
                </p>

            </div>
            `;


            updateTotal();


            return;

        }




        cart.forEach(function(product,index){



            const item = document.createElement("div");


            item.className = "cart-item";



            item.innerHTML =

            `
            <img src="${product.image}"
            alt="${product.name}">


            <div class="cart-info">

                <h3>${product.name}</h3>

                <p>${product.price}</p>


                <div class="quantity">

                    <button class="minus"
                    data-index="${index}">
                    -
                    </button>


                    <span>
                    ${product.quantity}
                    </span>


                    <button class="plus"
                    data-index="${index}">
                    +
                    </button>

                </div>


                <button class="remove"
                data-index="${index}">
                Remove
                </button>


            </div>
            `;



            cartContainer.appendChild(item);



        });



        addEvents();


        updateTotal();


    }






    /*
    ==============================
        Buttons Events
    ==============================
    */


    function addEvents(){



        document.querySelectorAll(".plus")
        .forEach(function(button){


            button.onclick=function(){


                let index=this.dataset.index;


                cart[index].quantity++;


                save();


            };


        });




        document.querySelectorAll(".minus")
        .forEach(function(button){


            button.onclick=function(){


                let index=this.dataset.index;


                if(cart[index].quantity > 1){

                    cart[index].quantity--;

                }


                save();


            };


        });





        document.querySelectorAll(".remove")
        .forEach(function(button){


            button.onclick=function(){


                let index=this.dataset.index;


                cart.splice(index,1);


                save();


            };


        });



    }





    /*
    ==============================
        Save Cart
    ==============================
    */


    function save(){


        localStorage.setItem(
            "aruCart",
            JSON.stringify(cart)
        );


        renderCart();


    }





    /*
    ==============================
        Total Price
    ==============================
    */


    function updateTotal(){


        if(!totalPrice){

            return;

        }



        let total = 0;



        cart.forEach(function(product){


            let price =
            parseFloat(
                product.price
                .replace(/[^\d.]/g,"")
            );


            total += price * product.quantity;



        });



        totalPrice.textContent =
        "৳ " + total.toFixed(2);



    }



});