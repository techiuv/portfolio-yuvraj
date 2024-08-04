document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
        strings: ['Professional Artist', 'Web Developer','Art Mentor'],
        typeSpeed: 50,
        loop: true
    });

    let navLinks = document.querySelectorAll(".nav-link");
    let offcanvas = document.getElementById("offcanvasNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
           // event.preventDefault(); 
            let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
            offcanvasInstance.hide();

            // Manually navigate to the target section
            var target = link.getAttribute("href");
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });
});

document.getElementById('year').innerHTML = '&copy;' + new Date().getFullYear() + '. All rights reserved.';


gsap.from(".pic, #home h3,#home h3 span, #home h5 #home p, .social-links", {
    y:20,
    opacity: 0,
    duration: 2,
});

gsap.from("#about h3, #about p", {
    opacity: 0,
    y: 10,
    
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%", 
        
        
    }
});


gsap.from("#work h3, #work p", {
    opacity: 0,
    y: 10,
    
    duration: 1,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.from(".box", {
    y: 10,
    opacity:0,
    scale:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.from("#contact h3, #contact p", {
    opacity: 0,
    y: 10,
    
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", 

    }
});


gsap.from("#contact div", {
    opacity: 0,
    scale:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", 

    }
});
