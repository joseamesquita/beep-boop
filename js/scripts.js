//Business Logic

function number(input) {
  var value = input.toString();
  if (value.includes("3")) {
    return " I'm sorry, " + $("input#name").val() + ". I'm afraid I can't do that!";
  }
  else if (value.includes("2")) {
    return " Beep!";
  }
  else if (value.includes("1")) {
    return " Boop!";
  }
  else {
    return " " + input;
  }
}


//User Interface Logic 
function compute(value) {
  var numArray = [];
  var num = value.toString();
  var letters = /^[A-Za-z]+$/;

  if (num.match(letters)) {
    return "This is not a number, please enter a number";
  }
  else if ((value <= -1) || (value >= 9999)) {
    return "number out of range, enter a number value between 0 - 99998";
  }
  else {
    for (var i = 0; i <= num; i++) {
      numArray.push(number(i));
      var newArray = numArray.toString((" "));
    }
    return numArray.join(" -> ");
  }
}

function computeReverse(value) {
  var numArray = [];
  var num = value.toString();
  var letters = /^[A-Za-z]+$/;
  if (num.match(letters)) {
    return "This is not a number, please enter a number.";
  }
  else if ((value <= -1) || (value >= 9999)) {
    return "number out of range, enter a number value between 0 - 99998";
  }
  else {
    for (var i = 0; i <= num; i++) {
      numArray.push(number(i));
      var newArray = numArray.toString((" "));
    }
    return numArray.reverse().join(" -> ");
  }
}

$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault();
    var valueExchange = number(parseInt($("input#number").val()));
    var result = compute(parseInt($("input#number").val()));
    var resultTwo = computeReverse(parseInt($("input#number").val()));

    $(".output").text(result).show();
    $(".outputTwo").text(resultTwo).show();
    $("#beep").show();
  });
});
