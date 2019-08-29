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
      accountCreateStateContainer.show();
      accountCreateState.removeAttr("disabled");
      accountCreateProvinceContainer.hide();
      accountCreateProvince.attr("disabled", false);
      accountCreateRegionContainer.hide();
      accountCreateRegion.attr("disabled", false);
      accountCreateCountryTextContainer.hide();
      accountCreateCountryText.attr("disabled", false);
      break;
    case "CA":
      accountCreateStateContainer.hide();
      accountCreateState.attr("disabled", false);
      accountCreateProvinceContainer.show();
      accountCreateProvince.removeAttr("disabled");
      accountCreateRegionContainer.hide();
      accountCreateRegion.attr("disabled", false);
      accountCreateCountryTextContainer.hide();
      accountCreateCountryText.attr("disabled", false);
      break;
    case "other":
      accountCreateCountryTextContainer.show();
      accountCreateCountryText.removeAttr("disabled");
      break;
    default:
      accountCreateStateContainer.hide();
      accountCreateState.attr("disabled", false);
      accountCreateProvinceContainer.hide();
      accountCreateProvince.attr("disabled", false);
      accountCreateRegionContainer.show();
      accountCreateRegion.removeAttr("disabled");
      accountCreateCountryTextContainer.hide();
      accountCreateCountryText.attr("disabled", false);
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
