function swapLabels() {
  var checkboxes = document.getElementsByName("option");
  var labels = document.querySelectorAll("form label");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var label = labels[i];
      label.parentNode.prepend(label);
    }
  }
}

function changeValues() {
  var checkboxes = document.getElementsByName("option");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].parentNode.classList.add("checked");
    } else {
      checkboxes[i].parentNode.classList.remove("checked");
    }
  }
}

function showSelectedValues() {
  var checkboxes = document.getElementsByName("option");
  var selectedValues = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues.push(checkboxes[i].value);
    }
  }

  if (selectedValues.length > 0) {
    alert("Selected Values: " + selectedValues.join(", "));
  } else {
    alert("No checkboxes selected.");
  }
}
