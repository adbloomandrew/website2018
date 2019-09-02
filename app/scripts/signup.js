$(document).ready(function() {
  var form = $("form#signUpForm")[0];
  $(form).submit(function (e) {
    e.preventDefault();
    if(form.checkValidity()) {
      $.ajax({
        url: "https://my.adbloom.co/sigp/",
        type: "post",
        dataType: "json",
        data: $(form).serialize(),
        success: function(data) {

        },
        error: function (error) {

        }
      });
    }
  });
});
