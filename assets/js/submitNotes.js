var floatingTextarea = $("#floatingTextarea");
var showMsg = $("#showMsg");
$("#addNote").on("click", function (event) {
  event.preventDefault();

  var eventAdded = {
    eventName: floatingTextarea.val().trim(),
  };

  if (eventAdded.eventName === "") {
    showMsg.text("Enter something to Add....");
  } else {
    // set new submission
    var value = floatingTextarea.val().trim();
    localStorage.setItem("getInput1", JSON.stringify(value));
    showMsg.text("Notes Added");
    // get most recent submission
    var enteredInputValue = JSON.parse(localStorage.getItem("getInput1"));
    floatingTextarea.text(enteredInputValue);

    return;
  }
});

//set the value stored in user notes
window.addEventListener("load", (event) => {
  var enteredInputValue = JSON.parse(localStorage.getItem("getInput1"));
  floatingTextarea.text(enteredInputValue);
});
