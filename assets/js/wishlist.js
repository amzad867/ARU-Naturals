/*
================================================
        ARU NATURALS
        WISHLIST.JS
        Frontend Wishlist System
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    let wishlist =
    JSON.parse(localStorage.getItem("aruWishlist")) || [];



    const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");



    wishlistButtons.forEach(function(button){


        button.addEventListener("click", function(){


            const productCard =
            this.closest(".product-card");



            const product = {


                id:
                productCard.querySelector(".product-title")
                .textContent.trim(),


                name:
                productCard.querySelector(".product-title")
                .textContent.trim(),


                price:
                productCard.querySelector(".new-price")
                .textContent.trim(),


                image:
                productCard.querySelector("img")
                .src


            };



            addWishlist(product);



        });


    });





    function addWishlist(product){



        const exists =
        wishlist.some(function(item){


            return item.id === product.id;


        });



        if(exists){


            showMessage(
                "Already in wishlist"
            );


            return;

        }



        wishlist.push(product);



        localStorage.setItem(
            "aruWishlist",
            JSON.stringify(wishlist)
        );



        showMessage(
            "Added to wishlist ❤️"
        );



    }





    function showMessage(message){


        alert(message);


    }



});