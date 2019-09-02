function manageFormFields(country) {
  var accountCreateStateContainer = $("#AccountCreateStateContainer");
  var accountCreateState = $("select#AccountCreateState");
  var accountCreateProvinceContainer = $("#AccountCreateProvinceContainer");
  var accountCreateProvince = $("select#AccountCreateProvince");
  var accountCreateRegionContainer = $("#AccountCreateRegionContainer");
  var accountCreateRegion = $("input#AccountCreateRegion");
  var accountCreateCountryTextContainer = $("#AccountCreateCountryTextContainer");
  var accountCreateCountryText = $("input#AccountCreateCountryText");

  switch (country) {
    case "US":
      accountCreateStateContainer.removeClass("d-none");
      accountCreateState.removeAttr("disabled");
      accountCreateProvinceContainer.addClass("d-none");
      accountCreateProvince.attr("disabled", true);
      accountCreateRegionContainer.addClass("d-none");
      accountCreateRegion.attr("disabled", true);
      accountCreateCountryTextContainer.addClass("d-none");
      accountCreateCountryText.attr("disabled", true);
      break;
    case "CA":
      accountCreateStateContainer.addClass("d-none");
      accountCreateState.attr("disabled", true);
      accountCreateProvinceContainer.removeClass("d-none");
      accountCreateProvince.removeAttr("disabled");
      accountCreateRegionContainer.addClass("d-none");
      accountCreateRegion.attr("disabled", true);
      accountCreateCountryTextContainer.addClass("d-none");
      accountCreateCountryText.attr("disabled", true);
      break;
    case "other":
      accountCreateCountryTextContainer.removeClass("d-none");
      accountCreateCountryText.removeAttr("disabled");
      accountCreateStateContainer.addClass("d-none");
      accountCreateState.attr("disabled", true);
      accountCreateProvinceContainer.addClass("d-none");
      accountCreateProvince.attr("disabled", true);
      accountCreateRegionContainer.removeClass("d-none");
      accountCreateRegion.removeAttr("disabled");
      break;
    default:
      accountCreateStateContainer.addClass("d-none");
      accountCreateState.attr("disabled", true);
      accountCreateProvinceContainer.addClass("d-none");
      accountCreateProvince.attr("disabled", true);
      accountCreateRegionContainer.removeClass("d-none");
      accountCreateRegion.removeAttr("disabled");
      accountCreateCountryTextContainer.addClass("d-none");
      accountCreateCountryText.attr("disabled", true);
      break;
  }
}

$(document).ready(function () {
  var select = $("select#AccountCreateCountry");
  manageFormFields(select.val());
  $(select).change(function (e) {
    manageFormFields(e.target.value);
  });
});
