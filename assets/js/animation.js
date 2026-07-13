/*
================================================
        ARU NATURALS
        ANIMATION.JS
        Scroll Animation + Back To Top
================================================
*/

"use strict";


document.addEventListener("DOMContentLoaded", function(){



/*
================================
        BACK TO TOP
================================
*/


const backTop =
document.querySelector(".back-to-top");



if(backTop){


    window.addEventListener("scroll",function(){



        if(window.scrollY > 400){


            backTop.classList.add("active");


        }

        else{


            backTop.classList.remove("active");


        }



    });



    backTop.addEventListener("click",function(){


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}





/*
================================
        SCROLL ANIMATION
================================
*/


const animatedItems =
document.querySelectorAll(".fade-up");



if(animatedItems.length){


    const observer =
    new IntersectionObserver(function(entries){



        entries.forEach(function(entry){



            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }



        });



    },{


        threshold:0.15


    });




    animatedItems.forEach(function(item){


        observer.observe(item);


    });



}



});
