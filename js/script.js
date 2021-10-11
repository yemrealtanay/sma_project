//navbar düzenleme:

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 600) {
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }
    });
});

/* IE/Safari Scroll Smoothness */

$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300);
    }
})



//typed animasyonu:

var typed = new Typed(".typing", {

    strings: ["Full Stack Developer", "Youtuber", "Writer", "3D Designer", "Game Designer", "Php Laravel Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

var typed = new Typed(".typed-strong", {
   strings: ["{ BenKimim? }", "if(WhomI){true}", "while(BenKimim?)", "{ Whomi? }"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});

var typed = new Typed(".typed-strong2", {
    strings: ["{ Neler Yapıyorum? }", "while(WhatIDo?)", "if(NelerYapiyorum?){true}", "{ WhatIDo? }"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
