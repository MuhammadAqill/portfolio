// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 6 + '%)',
  });

  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll / 1.5 + '%)',
  });

  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll + '%)',
  });
});
