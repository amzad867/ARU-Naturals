/*
================================================
        ARU NATURALS
        FILTER.JS
        Product Category Filter
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const filterButtons =
    document.querySelectorAll(".filter-btn");


    const products =
    document.querySelectorAll(".product-card");



    if(filterButtons.length === 0 || products.length === 0){

        return;

    }




    /*
    ==============================
        Category Filter
    ==============================
    */


    filterButtons.forEach(function(button){



        button.addEventListener("click",function(){



            const category =
            this.dataset.category;



            filterProducts(category);



            activeButton(this);



        });



    });







    function filterProducts(category){



        products.forEach(function(product){



            const productCategory =
            product.dataset.category;



            if(category === "all"){


                product.style.display="block";


            }

            else if(productCategory === category){


                product.style.display="block";


            }

            else{


                product.style.display="none";


            }



        });



    }







    /*
    ==============================
        Active Button
    ==============================
    */


    function activeButton(active){



        filterButtons.forEach(function(button){


            button.classList.remove("active");


        });



        active.classList.add("active");



    }



});