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
            let target = link.getAttribute("href");
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });
});

document.getElementById('year').innerHTML = '&copy;' + new Date().getFullYear() + '. All rights reserved.';


gsap.from(".pic, #home h3,#home h3 span, #home h5, #home p, .social-links", {
    y:20,
    opacity: 0,
    duration: .5,
    stagger:.3    
});

gsap.from("#about h3, #about p", {
    opacity: 0,
    y: 10,
    stagger:.5,
    duration: .5,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%", 
        
        
    }
}); 

// Assuming you have included the SplitText plugin
gsap.fromTo("#about h3 ", 
    {
        clipPath: "inset(100% 0% 0% 0%)" // Starts with the element fully hidden from the bottom
    }, 
    {
        clipPath: "inset(0% 0% 0% 0%)", // Ends with the element fully visible
        opacity: 1, 
        duration: .5,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    }
);


gsap.from("#work h3, #work p", {
    opacity: 0,
    y: 10,
    stagger:.5,
    duration: 1,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.from(".box", {
    y: 50,
    opacity:0,
    //scale:0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.from("#contact h3, #contact p", {
    opacity: 0,
    y: 10,
    stagger:.5,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", 

    }
});


gsap.from("form", {
    opacity: 0,
    y: 10,
   // flip:180,
    stagger: .5,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", 

    }
});


