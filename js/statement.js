// // Conditional Operator

// //ES5
// // if-else
// // switch-case

// //ES6
// // ternary operator

// const gender = prompt("gender");

// //if ealse only target 2 condditions max
// // Syntax:
// // if(){}else{}

// if (gender === "m") {
//   console.log("male");
// } else {
//   console.log("female");
// }

const day = +prompt("Enter Day from 1 to 7");

switch (day) {
  case 1:
    alert("Sunday");
    break;
  case 2:
    alert("Monday");
    break;
  default:
    alert("invelid number");
}
