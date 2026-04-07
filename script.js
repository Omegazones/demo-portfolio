console.log("You are welcome");

alert("Welcome!");

function getCurrentYear() {
  var d = new Date();
  var year = d.getFullYear();
  document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear();
