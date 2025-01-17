$(document).ready(function() {
    // Sticky navbar and scroll-up button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to top on click
    $('.scroll-up-btn').click(function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Smooth scroll for navbar links
    $('.navbar .menu li a').click(function() {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Navbar toggle
    $('.menu-btn').on('click touchstart', function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var stringsArray = window.innerWidth < 768 
        ? ["Python Developer", "ML Developer"] 
        : ["Python Developer", "ML Developer", "Freelance Trainer"];

    var typed = new Typed(".typing", {
        strings: stringsArray,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // OwlCarousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Tabs functionality
function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
