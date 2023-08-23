var stack = $("#stack");
//qoSksQ4s_hg                                         src="https://www.youtube.com/embed/ORrELERGIHs"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=fJEbVCrEMSE&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    stack.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var tim = $("#tim");
//qoSksQ4s_hg                                         src="https://www.youtube.com/embed/ORrELERGIHs"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ORrELERGIHs&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    tim.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var knight = $("#knight");
//
//                                        src="https://www.youtube.com/embed/H2gvHxC9gFY"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=H2gvHxC9gFY&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    knight.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                            src="https://www.youtube.com/embed/VknMxAIbJj4"

var code = $("#code");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=VknMxAIbJj4&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    code.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
