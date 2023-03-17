$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /* Category Accodian */
  $('.category-accordian .detail').eq(0).show();
  $('.category-accordian .title').click(function() {
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordian .title').next().stop().slideUp()

    $(this).addClass('active')
    $(this).siblings('.category-accordian .title').removeClass('active')
  });

  /* Recent Search Result */
  $('.search-recnet .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-all-clear').click(function() {
    $('.search-recent .item').hide();
  });

    /* Cart Items */
  $('.cart-content .btn-all-clear').click(function() {
    $('.cart-item').hide();
  });
  $('.cart-content .btn-clear').click(function() {
    $(this).parent().parent().hide();
  })

  /* Front Slider */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });
});
