/*---- Change Offer Icon Wrapper Background on Button Hover ----*/

const offerItemBtn = document.querySelectorAll('.offer-item__btn');

offerItemBtn.forEach((btn)=>{
    const offerItemBtnLink = btn.querySelector('a');
    offerItemBtnLink.addEventListener('mouseover', (e)=>{
        offerItemBtnLink.parentNode.parentNode.firstElementChild.classList.add('hovered');
    })
    offerItemBtnLink.addEventListener('mouseout', (e)=>{
        e.stopPropagation();
        offerItemBtnLink.parentNode.parentNode.firstElementChild.classList.remove('hovered');
    })
})

/*-- Owl carousel --*/

$(".members-section-carousel").owlCarousel({
    items: 4,
    margin: 15,
    navText: ['<span class="arrow_triangle-left"></span>', '<span class="arrow_triangle-right"></span>'],
    responsive : {
        0 : {
            items: 1,
            nav:false
        },
        768 : {
            items: 2,
            nav: false,
        },
        991 : {
            items: 3,
            nav: true,
        },
        1200 : {
            items: 4,
            nav: true,
        }
    }
});

/*---  Scroll Top Button ---*/

$('.footer-main__map-scroll-top').on('click', ()=>{
    $("html, body").animate({ scrollTop: 0 }, 600);
})

/*---  Search form animation ---*/

$('.top-header__search form button').on('click', ()=>{
    $('.top-header__search form').find('input').toggleClass('search-open')
})

/*--- Mobile Navigation ---*/

$('.burger-btn').on('click', function(e){
    $(this).parent('.top-header__burger-btn').toggleClass('mobile-nav__btn-show');
    $('.mobile-navigation').toggleClass('mobile-nav-show')
})