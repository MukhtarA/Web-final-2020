
    $(document).ready(function(){
        $('.slick-slider').slick();
    });

const navSlide = () => {
    const button = document.querySelector('.button');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Nav bar
    button.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    })
    //Links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
        console.log(index/5);
    })

    $(window).on('scroll', function(){
        setInterval(function(){
        if($(window).scrollTop()){
            $('.first-nav').addClass('white');
        }else{
            $('nav').removeClass('white');
        }},2000);
    })


 
};
navSlide();




