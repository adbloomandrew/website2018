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
          console.log(data);
          alert(data);
        },
        error: function (error) {
          console.log(error);
          alert(error);
        }
      });
    }
  });

  setTestData("other");
});

function setTestData(country) {
  $("#AffiliateCompany").val("Test name").change();
  $("#AffiliateAddress1").val("Address 1").change();
  $("#AffiliateAddress2").val("Address 3").change();
  $("#AffiliateCity").val("Default City").change();
  $("#AffiliateZipCode").val("23456").change();
  $("#AffiliatePhone").val("+48735467565").change();

  $("#AffiliateUserEmail").val("example@gmail.com").change();
  $("#AffiliateUserPassword").val("123ADAada").change();
  $("#AffiliateUserPasswordConfirmation").val("123ADAada").change();
  $("#AffiliateUserFirstName").val("Test Name").change();
  $("#AffiliateUserLastName").val("Test Last Name").change();
  $("#AffiliateUserTitle").val("Test Title").change();

  $("#AdditionalURL").val("example.com").change();

  switch (country) {
    case "US":
      $("#AccountCreateCountry").val("US").change();
      $("#AccountCreateState").val("AZ").change();
      break;
    case "CA":
      $("#AccountCreateCountry").val("CA").change();
      $("#AccountCreateProvince").val("NS").change();
      break;
    case "other":
      $("#AccountCreateCountry").val("other").change();
      $("#AccountCreateCountryText").val("Ukraine").change();
      $("#AccountCreateRegion").val("Odessa");
      break;
    default:
      break;
  }
}
