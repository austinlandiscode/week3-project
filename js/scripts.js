$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();

let userNumber = $("input#user-number").val();
let userArray = userNumber.split('');
let result = userArray.map(index=>Number(index));

console.log(result);
console.log(parseInt(userNumber));

  for (let [i] = 0; [i] <= parseInt(userNumber); [i]++) {
    if ([i] )
  }
});
});