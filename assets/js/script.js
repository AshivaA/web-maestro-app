var showvideo = $("#showvideo");
var showvideo2 = $("#showvideo2");
var queryURL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=kUMe1FH4CHE&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0";
https: showvideo.attr("style", "display:none;");
showvideo2.attr("style", "display:none;");
$("#clickme").on("click", function () {
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      showvideo.attr("style", "display:visible;");
      showvideo2.attr("style", "display:visible;");
      showvideo.attr(
        "src",
        "https://www.youtube.com/embed/" + data.items[0].id
      );
      showvideo2.attr(
        "src",
        "https://www.youtube.com/embed/" + data.items[0].id
      );
      // console.log(searchInputValue);
    });
});
// ===================================
$("#save").on("click", function (event) {
  event.preventDefault();
  // if ($("#content1").attr("checked")) {
  //   // event.preventDefault();
  //   // $("#content2").toggle(this.checked);
  //   window.location.href = "./assets/html/mypage.html";
  // }
  // window.location.href = "./assets/html/notes-page.html";
  // if ($("#content1").is(":checked")) {
  //   window.location.href = "./assets/html/mypage.html";
  // }
  // if ($("#content2").is(":checked")) {
  //   window.location.href = "./assets/html/notes-page.html";
  // }
  if ($("#content2").is(":checked") && $("#content1").is(":checked")) {
    alert("Choose one to proceed.");
    return;
  } else if ($("#content1").is(":checked")) {
    window.location.href = "./assets/html/html-page.html";
  }
  if ($("#content2").is(":checked")) {
    window.location.href = "./assets/html-docs/html-docs-page.html";
  }
});