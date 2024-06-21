// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var speedFactor = 1.2;
  var speedFactor1 = 2;

  console.log(wScroll);

  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 1.4 + '%)',
  });

  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll * speedFactor + '%)',
  });

  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll * speedFactor1 + '%)',
  });
});
