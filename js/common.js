$(function (e) {
    $('.boxes-position').owlCarousel({
        loop: false,
        dots: true,
        nav: true,
        navText: ["<span>←</span>","<span>→</span>"],
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            767:{
                items:2,
                nav: false,
            },
            992:{
                items:4
            }
        }
    })

    $('.ominext-news').owlCarousel({
        loop:true,
        dots:true,
        margin:15,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    $('.feedback-list').owlCarousel({
        dots:true,
        nav:true,
        items:1,
        navText: ["<span>←</span>","<span>→</span>"],
    })

    $('.box-slide').owlCarousel({
        dots:true,
        items:1,
        dotsData: true,
        responsive:{
            0:{
                dots:false
            },
            767:{
                dots:true
            },
            992:{
                dots:true
            }
        }
    })

    $('#three-line, .menu-desktop').click(function(e){
        $('.menu-desktop').toggleClass('opened');
    });
})