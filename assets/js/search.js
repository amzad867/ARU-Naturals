/*
================================================
        ARU NATURALS
        SEARCH.JS
        Product Search Control
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){



    const searchInput =
    document.querySelector("#searchInput");


    const products =
    document.querySelectorAll(".product-card");



    if(!searchInput || products.length === 0){

        return;

    }





    /*
    ==============================
        Live Search
    ==============================
    */


    searchInput.addEventListener(
        "keyup",
        function(){


            const searchValue =
            this.value
            .toLowerCase()
            .trim();



            let found = false;



            products.forEach(function(product){



                const title =
                product.querySelector(".product-title")
                .textContent
                .toLowerCase();



                if(title.includes(searchValue)){


                    product.style.display="block";


                    found=true;


                }

                else{


                    product.style.display="none";


                }



            });




            showNoResult(found);



        }

    );







    /*
    ==============================
        No Result Message
    ==============================
    */


    function showNoResult(found){



        let message =
        document.querySelector(".no-result");



        if(!found){


            if(!message){


                message =
                document.createElement("p");


                message.className="no-result";


                message.textContent =
                "No products found";


                searchInput
                .closest(".search-area")
                .after(message);


            }


        }


        else{


            if(message){

                message.remove();

            }


        }



    }




});