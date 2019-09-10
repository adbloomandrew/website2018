function manageFormFields(country) {
  var accountCreateState = {
    container: $("#AccountCreateStateContainer"),
    field: $("select#AccountCreateState")
  }, accountCreateProvince = {
    container: $("#AccountCreateProvinceContainer"),
    field: $("select#AccountCreateProvince")
  }, accountCreateRegion = {
    container: $("#AccountCreateRegionContainer"),
    field: $("input#AccountCreateRegion")
  }, accountCreateCountryText = {
    container: $("#AccountCreateCountryTextContainer"),
    field: $("input#AccountCreateCountryText")
  };

  function manageFields(enableFields, disableFields) {
    $(enableFields).each(function (idx) {
      enableFields[idx].container.removeClass("d-none");
      enableFields[idx].field.removeAttr("disabled");
    });
    $(disableFields).each(function (idx) {
      disableFields[idx].container.addClass("d-none");
      disableFields[idx].field.attr("disabled", true);
    });
  }

  switch (country) {
    case "US":
      manageFields(
        [accountCreateState],
        [accountCreateProvince, accountCreateRegion, accountCreateCountryText]
      );
      break;
    case "CA":
      manageFields(
        [accountCreateProvince],
        [accountCreateState, accountCreateRegion, accountCreateCountryText]
      );
      break;
    case "other":
      manageFields(
        [accountCreateRegion, accountCreateCountryText],
        [accountCreateState, accountCreateProvince]
      );
      break;
    default:
      manageFields(
        [accountCreateRegion],
        [accountCreateState, accountCreateProvince, accountCreateCountryText]
      );
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
