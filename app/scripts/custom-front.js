// File for your custom JavaScript

// Smooth scroll to anchor
$(document).ready(function() {
  smoothScrollTo(window.location.hash);
  $('.js-smooth-scroll').on('click', function(e) {
    smoothScrollTo(this.hash, e);
  });
});

function smoothScrollTo(hash, e) {
  if(hash === '') {
    return false;
  } else {
    if($(hash).length > 0) {
      if(typeof e !== 'undefined') {
        e.preventDefault();
        history.pushState(null, null, $(e.target).attr('href'));
      }
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 350);
    }
  }
}
