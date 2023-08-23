var stack = $("#stack");
//qoSksQ4s_hg                                         src="https://www.youtube.com/embed/ORrELERGIHs"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=fJEbVCrEMSE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ORrELERGIHs&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=H2gvHxC9gFY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=VknMxAIbJj4&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    code.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
