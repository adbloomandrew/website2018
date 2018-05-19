$(document).ready(function() {

  // start mobile navigation
  var $header = $('.header');
  var $closeBtn = $('#hamburger');
  var $linesWrap = $('.lines-wrap');
  var $body = $('body');

  function openNav() {
    $linesWrap.addClass('open');
    $body.addClass('nav-open');
    $header.addClass('open');
  }

  function closeNav() {
    $linesWrap.removeClass('open');
    $body.removeClass('nav-open');
    $header.removeClass('open');
  }

  $closeBtn.click(function () {
    if ($($linesWrap).hasClass('open')) {
      closeNav();
    } else {
      openNav();
    }
  });
  // end mobile navigation


  // start active link
  function clearPath(path) {
    var href = path.split('/');
    return href[href.length - 2]
  }

  var pathname = window.location.pathname;
  var $navLink = $('.navigation-link');
  $.map( $navLink, function( link ) {
    $(link).removeClass('active');
    var href = clearPath($(link).attr('href'))
    if(pathname.indexOf(href) !== -1) {
      $(link).addClass('active');
    }
  });
  // end active link


  $('textarea').each(function(){
    autosize(this);
  })
});
