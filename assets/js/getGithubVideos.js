var steel = $("#steel");
//qoSksQ4s_hg                 src="https://www.youtube.com/embed/USjZcfj8yxE"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=USjZcfj8yxE&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    steel.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var kevin = $("#kevin");
//
//                              src="https://www.youtube.com/embed/tRZGeaHPoaw"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=tRZGeaHPoaw&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    kevin.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                             src="https://www.youtube.com/embed/xnR0dlOqNVE"

var press = $("#press");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xnR0dlOqNVE&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    press.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                   src="https://www.youtube.com/embed/e2IbNHi4uCI"

var freecode = $("#freecode");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=e2IbNHi4uCI&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    freecode.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                            src="https://www.youtube.com/embed/nDRWhKc5Yd4"

var valaxy = $("#valaxy");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nDRWhKc5Yd4&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    valaxy.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                              src="https://www.youtube.com/embed/xNVM5UxlFSA"

var tomatoes = $("#tomatoes");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xNVM5UxlFSA&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tomatoes.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                              src="https://www.youtube.com/embed/MIFQwHlEI9o"

var tomatoes2 = $("#tomatoes2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=MIFQwHlEI9o&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tomatoes2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                           src="https://www.youtube.com/embed/pBUo-mew0V"

var tomatoes3 = $("#tomatoes3");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=jJQvP9rWpZM&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tomatoes3.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
