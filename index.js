var counter = 0;

function takeANumber(line) {
  var welcome = "";
  line.push(counter+1);
  welcome = "Welcome. You are number " + (counter+1);
  counter++;
  return welcome;
}

function nowServing(katzDeliLine) {
  var name = katzDeliLine[0];
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  var returnString = "The line is currently: ";
  var newString = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i !== katzDeliLine.length-1) {
        newString += (i+1) + ". " + katzDeliLine[i] + ", ";
      }
      else {
        newString += (i+1) + ". " + katzDeliLine[i];
      }
    }
    return returnString + newString;
  }
}