/*
================================================
        ARU NATURALS
        SLIDER.JS
        Hero Slider Control
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const slides = document.querySelectorAll(".hero-slide");


    if(slides.length <= 1){

        return;

    }


    let currentSlide = 0;



    /*
    ==============================
        Show Slide
    ==============================
    */


    function showSlide(index){


        slides.forEach(function(slide){

            slide.classList.remove("active");

        });


        slides[index].classList.add("active");


    }



    /*
    ==============================
        Next Slide
    ==============================
    */


    function nextSlide(){


        currentSlide++;


        if(currentSlide >= slides.length){

            currentSlide = 0;

        }


        showSlide(currentSlide);


    }



    /*
    ==============================
        Auto Play
    ==============================
    */


    setInterval(function(){


        nextSlide();


    },5000);



});