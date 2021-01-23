$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    $("#answer").empty();

    let userNumber = $("input#user-number").val();

    $("#counts").text(userNumber);
    $(".card").show();
    $("h4").show();

    let countArray = [];

    for (let i = 0; i <= parseInt(userNumber); i++ ) {
      i += '';
      if (i.indexOf('3') > -1) {
       countArray.push("Won't you be my neighbor?");
      } else if (i.indexOf('2') > -1) {
         countArray.push("Boop!");
      } else if (i.indexOf('1') > -1) {
         countArray.push("Beep!");
      } else {
         countArray.push(i);
      }
    }
    
   countArray.forEach(function(element) {
      $("#answer").append(`<li>${element}</li>`);
    });
  });
});