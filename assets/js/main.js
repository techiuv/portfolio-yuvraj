document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
        strings: ['Professional Artist', 'Web Developer'],
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

document.getElementById('year').innerHTML = '&copy; portfolio yuvraj ' + new Date().getFullYear() + '. All rights reserved.';

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value as needed
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.parentElement.classList.remove('active'));

                // Add 'active' class to the corresponding nav link
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                activeLink.parentElement.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

let tl = gsap.timeline();

tl.from(".loader p, .loader p span", { 
    x: 120,
    opacity:0,
    stagger:.3,
    duration: 1,

}); 

tl.to(".loader p, .loader p span", { 
    x: -120,
    opacity:0,
    stagger:.3,
    duration: 1,

}); 

tl.to(".loader", { 
    
    opacity:0,
    
    duration: .3,

}); 


tl.to(".loader", {  
    display: "none",
    duration: .1,

});  

tl.from("#home h3, #home h3 span, #home h5, .pic, #home p, .social-links", { 
    y: 5,
   // scale:0,
    opacity:0,
   // stagger:.3,
    duration: .5,

}); 

tl.from(".social-links li a", {
        y: 20,
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    });


gsap.from(" #about p", {    
    y: 10,
    opacity: 0,
    stagger:.5,
    duration: .5,
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",                 
    }
}); 


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

gsap.from(" .exp-box", {
    opacity: 0,
    y: 20,
    stagger:.8,
    duration: .5,
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",                 
    }
}); 



gsap.from("#work h3 ,#work p", {
    opacity: 0,
    y: 10,
    stagger:.5,
    duration: .5,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.fromTo("#work h3 ", 
    {
        clipPath: "inset(100% 0% 0% 0%)" // Starts with the element fully hidden from the bottom
    }, 
    {
        clipPath: "inset(0% 0% 0% 0%)", // Ends with the element fully visible
        opacity: 1, 
        duration: .5,
        scrollTrigger: {
            trigger: "#work",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    }
);


gsap.from(".box", {
    y: 50,
    opacity:0,
    //scale:0,
    duration: 1,
    stagger: .8,
    scrollTrigger: {
        trigger: "#work",
        start: "top 80%", 
        
        
    }
});

gsap.from("#contact p", {
    opacity: 0,
    y: 10,
    stagger:.5,
    duration: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", 

    }
});

gsap.fromTo("#contact h3 ", 
    {
        clipPath: "inset(100% 0% 0% 0%)" // Starts with the element fully hidden from the bottom
    }, 
    {
        clipPath: "inset(0% 0% 0% 0%)", // Ends with the element fully visible
        opacity: 1, 
        duration: .5,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%", 
            toggleActions: "play none none none"
        }
    }
);

