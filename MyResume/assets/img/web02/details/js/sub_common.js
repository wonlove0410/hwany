$(document).ready(function () {
  
  $(window).scroll(function(){
    let scrollT = $(this).scrollTop();
    if(scrollT > 350) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }

    if(scrollT > 350) {
      $("#header h1 a img").attr("src", "../img/logo/logo_b.png");
    } else {
      $("#header h1 a img").attr("src", "../img/logo/logo_w.png");
    }

    if(scrollT > 350) {
      $("#header h1 a img").attr("src", "../img/logo/logo_b.png");
    } else {
      $("#header h1 a img").attr("src", "../img/logo/logo_w.png");
    }
  });
    
});



