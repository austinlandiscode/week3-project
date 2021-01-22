$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();

let userNumber = $("input#user-number").val();
let userArray = userNumber.split('');
let result = userArray.map(index=>Number(index));

console.log(result);
console.log(parseInt(userNumber));
let emptyArray = [];

  for (let index = 0; index <= parseInt(userNumber); index++ ) {
    if (userArray.includes("3")) {
      emptyArray.push("Won't you be my neighbor?");
  } else if (userArray.includes("2")) {
      emptyArray.push("Boop");
  } else if (userArray.includes("1")) {
      emptyArray.push("Beep");
  } else {
      emptyArray.push(index);
  }
  console.log(emptyArray);
}
  });
});