var showvideo = $("#showvideo");
var showvideo2 = $("#showvideo2");

var queryURL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=kUMe1FH4CHE&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0";

https: showvideo.attr("style", "display:none;");
showvideo2.attr("style", "display:none;");

// $("#clickme").on("click", function () {
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    showvideo.attr("style", "display:visible;");
    showvideo2.attr("style", "display:visible;");
    showvideo.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
    showvideo2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
    // console.log(searchInputValue);
  });
// });
