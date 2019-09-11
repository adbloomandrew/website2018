$(document).ready(function() {
  var form = $("form#signUpForm")[0];

  $(form).submit(function (e) {
    e.preventDefault();
    if(form.checkValidity()) {
      toggleLoader();
      $.ajax({
        url: "https://my.adbloom.co/signup/",
        type: "post",
        dataType: "text",
        data: $(form).serialize(),
        success: function(data) {
          parseResponse(data);
          toggleLoader();
        },
        error: function (error) {
          console.error(error);
          showErrorMessages("Oops! Something went wrong. Try again later");
          toggleLoader();
        }
      });
    }
  });
});

function toggleLoader() {
  $("div#loader-animation").toggleClass("d-none");
}

function parseResponse(data) {
  var userMessage = $(data).find("div#user-messages");
  if(!!data) {
    if(!!userMessage.length) {
      var errorList = $(userMessage).find("ul").addClass("error-messages-list");
      showErrorMessages(errorList);
    } else {
      window.location.href = "/login/";
    }
  }
}

function showErrorMessages(message) {
  var responseMessage = $("div#response-message");
  $(responseMessage).removeClass("d-none").html(message);
  $(window).scrollTop(0);
}
