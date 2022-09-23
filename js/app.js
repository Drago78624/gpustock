"use strict";

const navLinks = document.querySelectorAll(".navbar__link")

navLinks.forEach(navLink => {
    navLink.addEventListener("click", (e)=>{
        navLinks.forEach(link => {
            link.classList.remove("active")
        })
        if(!e.target.parentElement.classList.contains("btn")){
            e.target.parentElement.classList.add("active")
        }
    })
})