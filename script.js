$(document).ready(function(){
    $(window).scroll(function(){
       
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
       
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Cybersecurity Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
        showCursor: true
    });
    

    var typed = new Typed(".typing-2", {
        strings: ["Cybersecurity Enthusiast", "Researcher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});


document.addEventListener("DOMContentLoaded", function() {
    var scrollElements = document.querySelectorAll('.scroll-reveal');

    function revealOnScroll() {
        scrollElements.forEach((element, index) => {
            var positionFromTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            var revealPosition = windowHeight - (windowHeight / 4);

            if (positionFromTop < revealPosition) {
                setTimeout(() => {
                    element.classList.add('revealed');
                }, index * 140); // Adjust the delay for a staggered effect
            } else {
                setTimeout(() => {
                    element.classList.remove('revealed');
                }, index * 150);
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    
    revealOnScroll(); // Trigger once on page load
});



function openFullScreen(imgSrc) {

    const fullScreenDiv = document.createElement('div');
    fullScreenDiv.classList.add('full-screen');

    const img = document.createElement('img');
    img.src = imgSrc;

    
    fullScreenDiv.appendChild(img);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; 


    fullScreenDiv.appendChild(closeButton);
    document.body.appendChild(fullScreenDiv);
    


    closeButton.addEventListener('click', () => {
        document.body.removeChild(fullScreenDiv);
        document.body.style.overflow = ''; 
    });


    document.body.style.overflow = 'hidden';
}


document.querySelectorAll('.cert-card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = link.getAttribute('href');
        openFullScreen(imgSrc);
    });
});

$(document).ready(function() {

    if (performance.navigation.type === 1) {
      
        window.scrollTo(0, 0);
    }
});

