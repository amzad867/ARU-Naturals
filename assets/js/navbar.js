/*
================================================
        ARU NATURALS
        NAVBAR.JS
        Navigation Control
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const navbar = document.querySelector(".navbar");


    /*
    ==============================
        Sticky Navbar Control
    ==============================
    */


    if(navbar){

        window.addEventListener("scroll", function(){

            if(window.scrollY > 100){

                navbar.classList.add("sticky");

            }

            else{

                navbar.classList.remove("sticky");

            }

        });

    }



    /*
    ==============================
        Active Menu Control
    ==============================
    */


    const navLinks = document.querySelectorAll(".nav-menu a");


    navLinks.forEach(function(link){


        link.addEventListener("click", function(){


            navLinks.forEach(function(item){

                item.classList.remove("active");

            });


            this.classList.add("active");


        });


    });



});