$(document).ready(function() {
  var passwordField = $("input#AffiliateUserPassword");
  var passwordFieldConfirmation = $("input#AffiliateUserPasswordConfirmation");
  var passwordNotification = $("#passwordNotification");
  var passwordError = $("#PasswordError");
  var passwordConfirmationError = $("#PasswordConfirmationError");

  $(passwordField).change(function (e) {
    var passwordFieldValue = e.target.value;
    var passwordRegEx = new RegExp("^(?=.*[!@#$%^&*]|[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$");
    if(passwordRegEx.test(passwordFieldValue)){
      $(passwordNotification).removeClass("text-danger");
      $(passwordNotification).addClass("text-muted");
      $(passwordError).addClass("d-none");
    }
    else {
      $(passwordNotification).addClass("text-danger");
      $(passwordNotification).removeClass("text-muted");
      $(passwordError).removeClass("d-none");
    }
  });

  $(passwordFieldConfirmation).change(function (e) {
    var passwordValue = $(passwordField).val();
    var confirmationPasswordValue = e.target.value;
    if(passwordValue === confirmationPasswordValue){
      $(passwordConfirmationError).addClass("d-none");
    } else {
      $(passwordConfirmationError).removeClass("d-none");
    }
  });
});

