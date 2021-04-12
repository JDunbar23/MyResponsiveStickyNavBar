
// Set the variables
const burger = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");


// set the navSlide function
function navSlide() {

    // looks for the hamburger icon getting clicked 
    burger.addEventListener("click", () => {
        //Toggle Nav
        navLinks.classList.toggle("nav-active");
        
        //Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`; // set how quick the navlinks slide into view
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle"); // sets the toggle class on the hamburger icon so it can turn into an X
    });   
}

navSlide();


// Makes the navbar sticky when scrolling down webpage
window.addEventListener("scroll", function(){ // listen for the webpage being scrolled vertically

    let nav = document.querySelector("nav"); // set a variable called header as our html header element

    nav.classList.toggle("sticky", window.scrollY > 0); // when web page is scrolled down we attach the class "sticky" to the header
})

