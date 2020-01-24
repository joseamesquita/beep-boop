//Business Logic

function number(input) {
  var value = input.toString();
  if (value.includes("3")) {
    return "I'm sorry, Dave. I'm afraid I can't do that";
  }
  else if (value.includes("2")) {
    return "Beep!";
  }
  else if (value.includes("1")) {
    return "Boop!";
  }
  else {
    return input;
  }
  console.log(value);
}


$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault();
    var valueExchange = number(parseInt($("input#number").val()));
    console.log(valueExchange);
    $("#output").text(valueExchange);
  })
});
