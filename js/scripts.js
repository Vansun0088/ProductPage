$(document).ready(function () {
  $('.mobile-menu').on('click', function() {
    $('.navigation .menu').slideToggle(400);
  })
})

$(window).resize(function () {
  const windowWidth = $(window).outerWidth();
  if(windowWidth > 768) {
    $('.navigation .menu').attr('style', '')
  }
})
