$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();

    let userNumber = $("input#user-number").val();
    let userArray = userNumber.split('');
    let result = userArray.map(index=>Number(index));

    let emptyArray = [];

    for (let i = 0; i <= parseInt(userNumber); i++ ) {
      i += '';
      if (i.indexOf('3') > -1) {
        emptyArray.push("Won't you be my neighbor?");
      } else if (i.indexOf('2') > -1) {
          emptyArray.push("Boop");
      } else if (i.indexOf('1') > -1) {
          emptyArray.push("Beep");
      } else {
          emptyArray.push(i);
      }
    }
    console.log(emptyArray);
  });
});