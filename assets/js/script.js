'use strict'

//add event on element
const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

//navbar toggle
const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavBar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active")
}

addEventOnElement(navToggler, "click", toggleNavBar)

//close navbar when click any navbar links
const navLinks = document.querySelectorAll("[data-nav-link]")
const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active")
}

addEventOnElement(navLinks, "click", closeNavbar)

//header active on down scroll
const header = document.querySelector("[data-header]")
const headerActive = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active")
    }
}

addEventOnElement(window, "scroll", headerActive)

//accordion toggle

const accordionElement = document.querySelectorAll("[data-accordion-action]")
const toggleAccordion = function () {
    this.classList.toggle("active");
}

addEventOnElement(accordionElement, "click", toggleAccordion)

