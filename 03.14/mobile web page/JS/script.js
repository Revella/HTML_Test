$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /* Category Accodian */
  $('.category-accordian .detail').eq(0).show()
  $('.category-accordian .title').click(function() {
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordian .title').next().stop().slideup();

    $(this).addClass('active')
    $(this).siblings('category-accordian .title').removeClass('active');

  })
})