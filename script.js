// Smooth scrolling for navbar links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Simple scroll animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", ()=>{

    sections.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});



// Initial animation style

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s ease";

});



// Navbar shadow while scrolling

window.addEventListener("scroll", ()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    }
    else{

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.08)";

    }

});