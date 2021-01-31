function mrRob(num) {
  let countArray = [];

  for (let i = 0; i <= num; i++ ) {
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
  return countArray;
}

$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    $("#answer").empty();
    let userNumber = parseInt($("input#user-number").val());
    
    $(".card").show();
    $("h4").show();

    let roboArray = mrRob(userNumber)
    
    roboArray.forEach(function(element) {
      $("#answer").append(`<li>${element}</li>`);
    });
  });
});