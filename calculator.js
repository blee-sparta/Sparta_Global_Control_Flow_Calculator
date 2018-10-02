
while (value1 != "x") {

    // get the user inputs
    var value1 = prompt('Enter first value or Type (x) to quit');
    if (value1 == "x") {
      break;
    }
    var value2 = prompt('Enter the second value');
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";

    switch (choice) {
      case "a":
        var result = parseInt(value1) + parseInt(value2)
        alert(`Your answer is ${result}`);
        break;
      case "s":
        var result = value1-value2
        alert(`Your answer is ${result}`)
        break;
      case "m":
        var result = value1*value2
        alert(`Your answer is ${result}`)
        break;
      case "d":
        var result = value1/value2
        alert(`Your answer is ${result}`)
        break;
      default:
        var result = parseInt(value1) + parseInt(value2)
        alert(`Your answer is ${result}`)
        break;
    }
    }
