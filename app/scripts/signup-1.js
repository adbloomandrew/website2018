$(document).ready(function () {
  var affiliateForm = $("form#affiliateForm")[0],
    affiliateUserForm = $("form#affiliateUserForm")[0],
    signUpAnswerForm = $("form#signUpAnswerForm")[0],
    agreementForm = $("form#agreementForm")[0];

  $("button#signUpButton").click(function () {
    if (checkFormsValidity()) {
      toggleLoader();
      $.ajax({
        url: "/signup.php",
        type: "post",
        data: {
          affiliate: $(affiliateForm).serialize(),
          user: $(affiliateUserForm).serialize(),
          answers: normalizeAnswersData()
        },
        success: function (data) {
          toggleLoader();
          try {
            var result = JSON.parse(data);
            if(result.status && result.status === -1) {
              var errorList = [];
              result.errors && result.errors.map((error) => {
                errorList.push(error.err_msg);
              });
              showErrorMessages(errorList);
            } else {
              window.location.href = "/success/";
            }
          } catch (e) {
            console.error(e, data);
            console.log(data);
          }
        },
        error: function (error) {
          toggleLoader();
          console.error(error);
          showErrorMessages(["Oops! Something went wrong. Try again later"]);
        }
      });
    }
  });

  function checkFormsValidity() {
    var isValid = affiliateForm.checkValidity() &&
      affiliateUserForm.checkValidity() &&
      signUpAnswerForm.checkValidity() &&
      agreementForm.checkValidity();
    if (!isValid) {
      $(affiliateForm).valid();
      $(affiliateUserForm).valid();
      $(signUpAnswerForm).valid();
      $(agreementForm).valid();
    }
    return isValid;
  }

  function normalizeAnswersData() {
    var normalizedData = [];
    $(signUpAnswerForm).serializeArray().map(({ name, value }) => {
      if (value) {
        var blocks = name.match(/\[.*?\]/g);
        if(!!blocks && blocks.length === 2) {
          normalizedData.push({
            id: blocks[1].match(/\d+/)[0],
            value
          });
        }
      }
    });
    return JSON.stringify(normalizedData);
  }

  function toggleLoader() {
    $("div#loader-animation").toggleClass("d-none");
  }

  function showErrorMessages(errorMessagesList) {
    var responseMessage = $("div#response-message");
    var sub_ul = $("<ul/>");
    errorMessagesList.map((value) => {
      var sub_li = $("<li/>").html(value);
      sub_ul.append(sub_li);
    });
    $(responseMessage).removeClass("d-none").html(sub_ul);
    $(window).scrollTop(0);
  }
});
