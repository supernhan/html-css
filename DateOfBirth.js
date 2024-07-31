var select = document.getElementById("selectNumber");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}

var select = document.getElementById("selectMonth");
for (var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}

var select = document.getElementById("selectYear");
for (var i = 1990; i <= 2024; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}
