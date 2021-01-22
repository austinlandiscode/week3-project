$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();

let userNumber = $("input#user-number").val();
let userArray = (userNumber.split('');

console.log(userArray);

  // for (let [i] = 0; [i] <= userNumber; [i]++) {
  //   if ([i] )
  // }
});
});