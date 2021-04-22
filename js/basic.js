"use strict";

//----------- Big sale ------------//
function main() {
  var oldPrice = document.getElementById("oldPrice").value;
  var discount = oldPrice * (20 / 100);
  var newPrice = oldPrice - discount;
  document.getElementById("result").innerHTML = " Output: " + newPrice;
}
//------------------------------------//

//--------- Speed of sound ----------//
function distance() {
  var meters = 343;
  var seconds = document.getElementById("seconds").value;
  document.getElementById("result2").innerHTML =
    "Output: " + seconds * meters + " m";
}
//------------------------------------//

//--------- Change your password ---------//
function changePassword() {
  var oldPass = document.getElementById("oldPass").value;
  var newPass = document.getElementById("newPass").value;
  var result = oldPass === newPass;
  if (result === true) {
    document.getElementById("result3").innerHTML =
      "Output: " + "Passwords match";
  } else {
    document.getElementById("result3").innerHTML =
      "Output: " + "Passwords don't match";
  }
}

//------------------------------------//

//---------- Find the Adults -----------//
function adult() {
  var age = document.getElementById("age").value;
  if (age >= 18) {
    document.getElementById("result4").innerHTML = "You are free to drink";
  } else {
    document.getElementById("result4").innerHTML = "You are too young";
  }
}
//--------------------------------------//

//---------- Volunteer Teams -----------//

function volunteersNeed() {
  var numberVolunteers = document.getElementById("volunteers").value;
  var groups = numberVolunteers % 5;
  groups = groups === 0 ? groups : 5 - groups;
  document.getElementById("result5").innerHTML =
    "Output: " + groups + " needed";
}
// another solution
// function volunteersNeed() {
//   var numberVolunteers = document.getElementById("volunteers").value;
//   var groups = numberVolunteers % 5;
//   if (groups === 0) {
//     document.getElementById("result5").innerHTML =
//       groups + " volunteers needed";
//   } else {
//     document.getElementById("result5").innerHTML =
//       5 - groups + " volunteers needed";
//   }
// }
//--------------------------------------//

//---------- Noon Or Midnight -----------//

function measureTime() {
  var hour = document.getElementById("hours").value;
  hour = hour >= 0 && hour <= 12 ? "am" : "pm";
  document.getElementById("result6").innerHTML = "Output: " + hour;
}
// another solution
// function measureTime() {
//   var hour = document.getElementById("hours").value;
//   if (hour >= 0 && hour <= 12) {
//     document.getElementById("result6").innerHTML = "am";
//   } else if (hour >= 13 && hour <= 24) {
//     document.getElementById("result6").innerHTML = "pm";
//   } else {
//     document.getElementById("result6").innerHTML = "wrong time";
//   }
// }
//--------------------------------------//
