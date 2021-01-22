$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    $("#answer").empty();

    let userNumber = $("input#user-number").val();

    let emptyArray = [];

    for (let i = 0; i <= parseInt(userNumber); i++ ) {
      i += '';
      if (i.indexOf('3') > -1) {
        emptyArray.push("Won't you be my neighbor?");
      } else if (i.indexOf('2') > -1) {
          emptyArray.push("Boop!");
      } else if (i.indexOf('1') > -1) {
          emptyArray.push("Beep!");
      } else {
          emptyArray.push(i);
      }
    }
    console.log(emptyArray);

    emptyArray.forEach(function(element) {
      $("#answer").append(`<li>${element}</li>`);
    });
  });
});