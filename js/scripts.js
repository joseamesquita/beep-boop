//Business Logic

function number(input) {
  var value = input.toString();
  if (value.includes("3")) {
    return " I'm sorry, Dave. I'm afraid I can't do that.";
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
  console.log(value);
}

function compute(value) {
  var numArray = [];
  var num = value.toString();
  var letters = /^[A-Za-z]+$/;
  if (num.match(letters)) {
    return "This is not a number, please enter a number";
  }
  else {
    for (var i = 0; i <= num; i++) {
      numArray.push(number(i));
      var newArray = numArray.toString((" "));
    }
    console.log(numArray);
    console.log(newArray);
    return newArray;
  }
}


$(document).ready(function () {
  $("#input").submit(function (event) {
    event.preventDefault();
    var valueExchange = number(parseInt($("input#number").val()));
    var result = compute(parseInt($("input#number").val()));
    console.log(valueExchange);
    console.log(result);
    // $("#output").text(valueExchange);
    $("#output").text(result)
  });
});
