/*
================================================
        ARU NATURALS
        NEWSLETTER.JS
        Newsletter Control
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const newsletterForm = document.getElementById("newsletterForm");

    const emailInput = document.getElementById("newsletterEmail");


    if(!newsletterForm || !emailInput){

        return;

    }



    newsletterForm.addEventListener("submit", function(event){


        event.preventDefault();



        const email = emailInput.value.trim();



        /*
        ==============================
            Empty Check
        ==============================
        */

        if(email === ""){


            showMessage(
                "Please enter your email address",
                "error"
            );


            return;

        }



        /*
        ==============================
            Email Validation
        ==============================
        */


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(!emailPattern.test(email)){


            showMessage(
                "Please enter a valid email address",
                "error"
            );


            return;

        }



        /*
        ==============================
            Success
        ==============================
        */


        showMessage(
            "Thank you for subscribing to ARU Naturals!",
            "success"
        );


        emailInput.value = "";



        /*
        Future:
        Firebase Email Save Here

        Example:

        saveSubscriber(email);

        */


    });





    function showMessage(message,type){


        let oldMessage = document.querySelector(".newsletter-message");


        if(oldMessage){

            oldMessage.remove();

        }



        const messageBox = document.createElement("p");


        messageBox.className =
        "newsletter-message " + type;


        messageBox.textContent = message;



        newsletterForm.after(messageBox);



    }



});