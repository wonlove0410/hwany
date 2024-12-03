$(function () {
  // 스플래시
  //기본값
  $(".step02 div").css({ marginLeft: -400 });
  $(".img .content").css({ marginBottom: 0 });
  $(".img .openedCover").hide();
  $(".txt .step02").hide();
  $(".txt .step03").hide();
  $(".txt .step04").hide();
  //애니메이션시작
  $(".step01").delay(600).fadeOut(250);
  $(".txt .step02").delay(800).fadeIn(600);
  $(".txt .step02").delay(200).fadeOut(250);
  $(".txt .step03").delay(2000).fadeIn(600);
  $(".txt .step03").delay(200).fadeOut(250);
  $(".txt .step04").delay(3000).fadeIn(600);
  $(".img").delay(800).animate({ marginLeft: 0 }, 600);
  $(".img .heart").delay(2000).fadeOut(500);
  $(".img .cover").delay(3000).fadeOut(250);
  $(".img .openedCover").delay(3000).fadeIn(500);
  $(".img .content").delay(3000).animate({ marginBottom: 120 }, 500);

  // 로그인
  //기관명,수급자 - 리스트 show
  $(".login-wrap fieldset>div:nth-of-type(1)").click(function () {
    $(this).toggleClass("active");
    $(".login-wrap input").toggleClass("active")
    $(".login-wrap .select-list").delay(3000).fadeIn(0);
  });
  //기관명,수급자 - 선택
  $(".login-wrap .select-list li:nth-of-type(1)").click(function () {
    $(".login-wrap .selected").addClass("show");
    $(".login-wrap .select-list").hide();
    $(".login-wrap fieldset>div:nth-of-type(1)").hide();
    $(".login-wrap .ex").show();
    $(".login-wrap .btn-next").addClass("active");
  });
  //기관명,수급자 - 재선택
  $(".login-wrap .selected").click(function () {
    $(".login-wrap fieldset>div:nth-of-type(1)").show();
    $(".login-wrap .select-list").show();
    $(this).hide();
    $(".login-wrap .ex").hide();
    $(".login-wrap .btn-next").removeClass("active");
  });

  // 온보딩
  //스와이퍼
  const onBoarding = new Swiper(".onBoarding", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //다시 보지 않기
  $(".dontshow input").click(function () {
    $(this).toggleClass("active")
  });

  // 메인
  const noticeswiper = new Swiper(".noticeswiper", {
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });
  const noticeswiperham = new Swiper(".noticeswiperham", {
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });

  $(".home-wrap .ham").click(function () {
    $(".ham-list").show();
  });
  $(".ham-list .btn-clear").click(function () {
    $(".ham-list").hide();
  });
  $(".home-wrap .btn-alram").click(function () {
    $(".alram").show();
  });
  $(".ham-list .btn-alram").click(function () {
    $(".alram").show();
  });
  $(".alram .clear").click(function () {
    $(".alram").hide();
  });
  $(".alram .btn-more").click(function () {
    $(".alram .cancle-bg").fadeIn();
    $(".alram .cancle-con").fadeIn();
  });
  $(".alram .yes").click(function () {
    $(".alram .cancle-bg").fadeOut();
    $(".alram .cancle-con").fadeOut();
  });
  $(".alram .no").click(function () {
    $(".alram .cancle-bg").fadeOut();
    $(".alram .cancle-con").fadeOut();
  });

  // 공지

  // 급여제공내역
  //주간달력
  const dateclick = new Swiper(".dateclick", {
  });
  //앵커포인트 버튼
  $(window).scroll(function () {
    let scrollBox = $(document).scrollTop();
    console.log(scrollBox);
  });
  $(".service-wrap .serviceclick ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser01").offset().top - 30) {
      $(".serviceclick .service01").addClass("active");
      $(".serviceclick .service01").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: 0 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser02").offset().top - 30) {
      $(".serviceclick .service02").addClass("active");
      $(".serviceclick .service02").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -192 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser03").offset().top - 30) {
      $(".serviceclick .service03").addClass("active");
      $(".serviceclick .service03").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -440 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser04").offset().top - 30) {
      $(".serviceclick .service04").addClass("active");
      $(".serviceclick .service04").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -500 });
    }
  });
  //팝업달력
  $(".service-wrap .date").click(function () {
    $(".service-wrap .dimmed").fadeIn();
    $(".service-wrap .popup").show();
    $(".service-wrap .datepicker-calendar").animate({ marginBottom: 0 });
    $(".service-wrap").addClass("active");
  });
  $(".service-wrap .btn-modal-close").click(function () {
    $(".service-wrap .dimmed").fadeOut();
    $(".service-wrap .popup").delay(300).fadeOut();
    $(".service-wrap .datepicker-calendar").animate({ marginBottom: -812 });
    $(".service-wrap").removeClass("active");
  });

  // 활동일지
  const log = new Swiper(".log", {
    loop: false,
    loopAdditionalSlides: 1,
    resistance: false,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  //activityLog01 - 페이지네이션2
  const pagingSwiper = new Swiper(".log", {
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
  });
  //Main Swiper로 progress Bar 제어
  log.controller.control = pagingSwiper;
  //activityLog_search - '프로그램' 검색
  $(".activityLog-wrap .search-box button").click(function () {
    $(".activityLog-wrap .step01").hide();
    $(".activityLog-wrap .step02").show();
  });
  //activityLog_search - 최근 검색어 - show
  $(".activityLog-wrap .search-box .clear").click(function () {
    $(".activityLog-wrap .step02").hide();
    $(".activityLog-wrap .step03").show();
    $(".activityLog-wrap .before").hide();
    $(".activityLog-wrap .after").show();
  });
  $(".gallery-wrap .select-btn-wrap button:nth-of-type(1)").click(function () {
    $(this).hide();
    $(this).siblings().show();
    $(".gallery-wrap .photo-list").addClass("active");
    $(".gallery-wrap .bottom").show();
  });
  $(".gallery-wrap .select-btn-wrap button:nth-of-type(3)").click(function () {
    $(this).hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(2)").hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(1)").show();
    $(".gallery-wrap .photo-list").removeClass("active");
    $(".gallery-wrap .bottom").hide();
  });
  $(".gallery-wrap .photo-list li").click(function () {
    $(this).addClass("active");
  });
  $(".gallery-wrap .photo-list li:nth-of-type(2)").click(function () {
    $(".gallery-wrap .number li:nth-of-type(1)").show();
  });
  $(".gallery-wrap .photo-list li:nth-of-type(3)").click(function () {
    $(".gallery-wrap .number li:nth-of-type(1)").hide();
    $(".gallery-wrap .number li:nth-of-type(2)").show();
  });
  $(".gallery-wrap .photo-list li:nth-of-type(4)").click(function () {
    $(".gallery-wrap .number li:nth-of-type(2)").hide();
    $(".gallery-wrap .number li:nth-of-type(3)").show();
  });
  $(".gallery-wrap .bottom-btn-wrap li:nth-of-type(1)").click(function () {
    $(".gallery-wrap .number li:nth-of-type(4)").fadeToggle(0);
    $(this).find(".all").toggleClass("active");
    $(".gallery-wrap .photo-list li").toggleClass("active")
  });
  $(".gallery-wrap .bottom-btn-wrap li:nth-of-type(2) .button.save").click(function () {
    $(".gallery-wrap .saved").show().delay(500).fadeOut();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(3)").hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(2)").hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(1)").show();
    $(".gallery-wrap .number li").hide();
    $(this).find(".all").removeClass("active");
    $(".gallery-wrap .photo-list li").removeClass("active");
    $(".gallery-wrap .photo-list").removeClass("active");
    $(".gallery-wrap .bottom").hide();
  });
  $(".gallery-wrap .bottom-btn-wrap li:nth-of-type(2) .button.share").click(function () {
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(3)").hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(2)").hide();
    $(".gallery-wrap .select-btn-wrap button:nth-of-type(1)").show();
    $(".gallery-wrap .number li").hide();
    $(this).find(".all").removeClass("active");
    $(".gallery-wrap .photo-list li").removeClass("active");
    $(".gallery-wrap .photo-list").removeClass("active");
    $(".gallery-wrap .bottom").hide();
    $(".gallery-wrap .modal").animate({ marginBottom: 0 });
    $(".gallery-wrap .modal").animate({ marginBottom: 0 });
    $(".gallery-wrap .dimmed").fadeIn();
  });
  $(".gallery-wrap .share-app.kakao-talk li:nth-of-type(3)").click(function () {
    $(".gallery-wrap .modal").animate({ marginBottom: -910 });
    $(".gallery-wrap .dimmed").fadeOut();
    $(".gallery-wrap .shared").show().delay(800).fadeOut();
  });
  //팝업-스와이퍼
  const photoshare = new Swiper(".photoshare", {
    slidesPerView: 1.8,
    spaceBetween: 28,
  });
  //팝업
  $(".photo-wrap .share").click(function () {
    $(".gallery-wrap .modal").animate({ marginBottom: 0 });
    $(".gallery-wrap .dimmed").fadeIn();
  });
  $(".photo-wrap .button.save").click(function () {
    $(".gallery-wrap .saved").show().delay(500).fadeOut();
  });
  //썸네일스와이퍼
  const smallphoto = new Swiper(".smallphoto", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const bigphoto = new Swiper(".bigphoto", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: smallphoto,
    },
  });

  // 청구입금내역
  //필터(모달) - show
  $(".bills-wrap .btn-filter").click(function () {
    $(".bills-wrap .modal.filter").animate({ marginBottom: 0 });
    $(".bills-wrap .dimmed").fadeIn();
  });
  //필터(모달) - 기간 연동 - 필터현황
  $(".bills-wrap .modal.filter .filter-period li").click(function () {
    let idx = $(this).index();
    $(".bills-wrap #main .filter-period li").eq(idx).show().siblings().hide();
    $(this).find(".button").addClass("active");
    $(this).siblings().find(".button").removeClass("active");
  });
  //필터(모달) - 기간 연동 - 청구/입금 내역 리스트
  $(".bills-wrap .modal.filter .filter-period li:not(:nth-of-type(2))").click(function () {
    $(".bills-wrap .content-list li:nth-of-type(n+2)").hide();
    $(".bills-wrap .payment-list li:nth-of-type(n+2)").hide();
  });
  $(".bills-wrap .modal.filter .filter-period li:nth-of-type(2)").click(function () {
    $(".bills-wrap .content-list li:nth-of-type(n+2)").show();
    $(".bills-wrap .payment-list li:nth-of-type(n+2)").show();
  });
  //필터(모달) - 기간 - 직접 설정 - show/hide
  $(".bills-wrap .select-date").hide();
  $(".bills-wrap .modal.filter .filter-period li:last-of-type").click(function () {
    $(".bills-wrap .select-date").show();
  });
  $(".bills-wrap .modal.filter .filter-period li:not(:last-of-type)").click(function () {
    $(".bills-wrap .select-date").hide();
  });
  //필터(모달) - 달력(모달) - show
  $(".bills-wrap .select-date button").click(function () {
    $(".bills-wrap .datepicker-calendar").animate({ marginBottom: 0 });
  });
  //만약 filter-type의 모든 li에 .active가 붙으면 '전체'로 보여지기-트릭
  $(".bills-wrap .modal.filter .filter-type li").click(function () {
    $(".bills-wrap #main .filter-type").addClass("show");
    $(".bills-wrap #main .all").hide();
    let idx = $(this).index();
    $(".bills-wrap #main .filter-type li").eq(idx).toggleClass("active");
    $(this).find(".button").toggleClass("active");
    $(".bills-wrap .payment-list li").eq(idx).toggleClass("active");
  });
  //필터(모달) - 정렬 연동
  $(".bills-wrap .modal.filter .filter-arrange li").click(function () {
    let idx = $(this).index();
    $(".bills-wrap #main .filter-arrange li").eq(idx).show().siblings().hide();
    $(this).find(".button").addClass("active");
    $(this).siblings().find(".button").removeClass("active");
  });
  $(".bills-wrap .modal.filter .filter-arrange li:first-of-type").click(function () {
    $(".bills-wrap .content-list").removeClass("reverse");
    $(".bills-wrap .payment-list").removeClass("reverse");
  });
  $(".bills-wrap .modal.filter .filter-arrange li:last-of-type").click(function () {
    $(".bills-wrap .content-list").addClass("reverse");
    $(".bills-wrap .payment-list").addClass("reverse");
  });
  //필터(모달) - hide
  $(".bills-wrap .filter-selected").click(function () {
    $(".bills-wrap .dimmed").fadeOut();
    $(".bills-wrap .modal.filter").animate({ marginBottom: -722 });
  });
  //달력(모달) - hide
  $(".bills-wrap .date-selected").click(function () {
    $(".bills-wrap .modal.datepicker-calendar").animate({ marginBottom: -812 });
  });

  // 예약내역
  /* reservation01-wrap */
  //대면예약 팝업 - show
  $(".reservation01-wrap .btn-list li:nth-child(1)").click(function () {
    $(".reservation01-wrap .dimmed01").animate({ marginBottom: 0 });
    $(".reservation01-wrap .dimmed").fadeIn();
  });
  //대면예약 팝업 - hide
  $(".reservation01-wrap .m-close").click(function () {
    $(".reservation01-wrap .dimmed01").animate({ marginBottom: -487 });
    $(".reservation01-wrap .dimmed").fadeOut();
  });
  //비대면예약 팝업 - show
  $(".reservation01-wrap .btn-list li:nth-child(2)").click(function () {
    $(".reservation01-wrap .dimmed02").animate({ marginBottom: 0 });
    $(".reservation01-wrap .dimmed").fadeIn();
  });
  //비대면예약 팝업 - hide
  $(".reservation01-wrap .m-close").click(function () {
    $(".reservation01-wrap .dimmed02").animate({ marginBottom: -487 });
    $(".reservation01-wrap .dimmed").fadeOut();
  });
  /* reservation02-wrap */
  //반려 팝업 - show
  $(".reservation02-wrap li:nth-of-type(4) .detail").click(function () {
    $(".reservation02-wrap .dimmed").fadeIn();
  });
  //반려 팝업 - hide
  $(".reservation02-wrap .btn li:nth-child(2)").click(function () {
    $(".reservation02-wrap .dimmed").hide();
  });
  /* reservation03-wrap */
  //반려 팝업 - show
  $(".reservation03-wrap li:nth-of-type(4) .detail").click(function () {
    $(".reservation03-wrap .dimmed").fadeIn();
  });
  //반려 팝업 - hide
  $(".reservation03-wrap .btn li:nth-child(2)").click(function () {
    $(".reservation03-wrap .dimmed").hide();
  });
  /* reservation05-wrap */
  //달력 팝업 - show
  // $(".form01-wrap .submit-complete .yes").click(function () {
  //   $(".reservation02-wrap .reservation-list>li:nth-of-type(1)").show();
  // });
  $(".form-wrap .input.date").click(function () {
    $(".form-wrap .datepicker-calendar").animate({ marginBottom: 0 });
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  //달력 팝업 - hide
  $(".form-wrap .btn-modal-close.date-selected").click(function () {
    $(".form-wrap .datepicker-calendar").animate({ marginBottom: -812 });
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  //시간 팝업 - show
  $(".form-wrap .input.time").click(function () {
    $(".form-wrap .timepicker").animate({ marginBottom: 0 });
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  //시간 팝업 - hide
  $(".form-wrap .btn-modal-close.date-selected").click(function () {
    $(".form-wrap .timepicker").animate({ marginBottom: -812 });
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  //제출 팝업 - show
  $(".form-wrap .btn").click(function () {
    $(".form-wrap .submit").fadeIn();
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  //제출 팝업 - hide
  $(".form-wrap .submit .no").click(function () {
    $(".form-wrap .submit").fadeOut();
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  //제출 팝업 - hide
  //제출 확인 팝업 - show
  $(".form-wrap .submit .yes").click(function () {
    $(".form-wrap .submit").hide();
    $(".form-wrap .submit-complete").fadeIn();
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  //제출 확인 팝업 - hide
  $(".form-wrap .submit-complete .no").click(function () {
    $(".form-wrap .submit-complete").fadeOut();
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  //날짜 선택
  $(".form-wrap .datepicker-calendar td.start").click(function () {
    $(this).addClass("selected");
    $(".form-wrap .date .before").hide();
    $(".form-wrap .date .after").addClass("show");
    $(this).removeClass("blue");
    $(".form-wrap .date .after span:first-of-type").show().siblings().hide();
    $(".form-wrap .today").removeClass("selected");
  })
  $(".form-wrap .datepicker-calendar td.fin").click(function () {
    $(this).addClass("selected");
    $(".form-wrap .start").addClass("dates");
    $(".form-wrap .fin").toggleClass("blue");
    $(".form-wrap .date .after span:first-of-type").siblings().show();
    $(".form-wrap .today").removeClass("selected");
  })
  //시간 선택
  $(".form-wrap .timepicker dd").click(function () {
    $(this).toggleClass("active");
    $(".form-wrap .time .before").hide();
    $(".form-wrap .time .after").show();
  });
  //관계 선택시 select - font-weight, font-color 변화
  $(".form-wrap select").click(function () {
    $(this).addClass("active");
  });
  //인원 +-
  $(".form-wrap .company .plus").click(function () {
    $(".form-wrap .num01").hide();
    $(".form-wrap .num02").delay(0).fadeIn(0);
    $(".form-wrap .num02").delay(550).fadeOut(0);
    $(".form-wrap .num03").delay(560).fadeIn(0);
  })

  // 마이페이지
  // 로그아웃 클릭 시 배경과 팝업 보이기
  $(".mypage_01-wrap .log-out").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeIn();
    $(".mypage_01-wrap").addClass("active");
  });
  $(".mypage_01-wrap .logout-con .no").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeOut();
    $(".mypage_01-wrap").removeClass("active");
  });
  $(".mypage_01-wrap .logout-con .yes").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeOut();
    $(".mypage_01-wrap").removeClass("active");
  });
});