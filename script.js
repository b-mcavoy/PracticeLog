var outputString = "";
function getText() {
  
  var description = document.getElementById("log").value;
  var time = document.getElementById("time").value;

  outputString += "<br>" + time + " " + description;
  
  document.getElementById("output").innerHTML = outputString;
  document.getElementById("log").value = "";
}