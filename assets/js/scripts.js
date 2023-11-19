/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('fixed-top');
                // mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('fixed-top', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed', 'fixed-top');
            }
        }
        scrollPos = currentTop;
    });
})

/*
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('mainNav').classList.add('fixed-top', 'is-visible', 'is-fixed');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        //navbar_height = document.getElementById('mainNav').clientHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('mainNav').classList.remove('fixed-top', 'is-visible', 'is-fixed');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});
*/
// DOMContentLoaded  end

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    $("#commonPreloader").removeClass("loader");
  });
});

