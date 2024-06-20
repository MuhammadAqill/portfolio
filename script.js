$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('img-fixed').css({
    transform: 'translate(0px, ' + wScroll + '%)',
  });

  $('p-fixed').css({
    transform: 'translate(0px, ' + wScroll + '%)',
  });
});
