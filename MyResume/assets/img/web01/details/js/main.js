$(document).ready(function () {
//header.fix
$(window).scroll(function(){
  let scrollT = $(this).scrollTop();
  if(scrollT > 100) {
    $("#header").addClass("fix");
  } else {
    $("#header").removeClass("fix");
  }

});

//main_visual
const mv = new Swiper ('.mv', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },  
});

//video
const vi = new Swiper ('.vi', {
  loop: true,
  speed: 2000,
  centeredSlides: true,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    1435: {
      slidesPerView: 3.5,
      spaceBetween: 5,
    },
  },
});

//family_list
$(".family_list").hide();
$(".rotate_on").hide();
$(".rotate_off").click(function(){
  $(".family_list").show();
  $(".rotate_on").show();
  $(".family_site .rotate_off").hide();
});
$(".rotate_on").click(function(){
  $(".family_list").hide();
  $(".rotate_on").hide();
  $(".family_site .rotate_off").show();
});


//quick_menu
  $(".quick_menu").animate( { "top": $(document).scrollTop() + 300 +"px" }, 500 );
  $(window).scroll(function(){
   $(".quick_menu").stop();
   $(".quick_menu").animate( { "top": $(document).scrollTop() + 300 + "px" }, 1000 );
  });


  //mgnb
  $(".ham").click(function(){
    $(".mgnb_wrap").fadeIn();
  });
  $(".close").click(function(){
    $(".mgnb_wrap").fadeOut();
  });
});