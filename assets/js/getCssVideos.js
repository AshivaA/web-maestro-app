var fireship = $("#fireship");
var dcode = $("#dcode");
var meadia = $("#meadia");
var wright = $("#wright");
var ninja = $("#ninja");

//fireship
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=OEV8gMkCHXQ&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fireship.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                 src="https://www.youtube.com/embed/oAkPcpzjDBI"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=oAkPcpzjDBI&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dcode.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//              src="https://www.youtube.com/embed/qKoajPPWpmo"
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qKoajPPWpmo&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    meadia.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//              src="https://www.youtube.com/embed/0afZj1G0BIE"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=0afZj1G0BIE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    wright.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//              src="https://www.youtube.com/embed/D3iEE29ZXRM"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=D3iEE29ZXRM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//colorcode                 src="https://www.youtube.com/embed/1h5StQJ8hww"
var colorcode = $("#colorcode");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=1h5StQJ8hww&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    colorcode.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                src="https://www.youtube.com/embed/FHZn6706e3Q"

var ninja2 = $("#ninja2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=FHZn6706e3Q&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                src="https://www.youtube.com/embed/l1mER1bV0N0"

var simplified = $("#simplified");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=l1mER1bV0N0&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    simplified.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                  src="https://www.youtube.com/embed/MxEtxo_AaZ4"

var dragon = $("#dragon");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=MxEtxo_AaZ4&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dragon.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                  src="https://www.youtube.com/embed/jx5jmI0UlXU"

var simplified2 = $("#simplified2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=jx5jmI0UlXU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    simplified2.attr(
      "src",
      "https://www.youtube.com/embed/" + data.items[0].id
    );
  });
//                  src="https://www.youtube.com/embed/XQaHAAXIVg8"

var ninja3 = $("#ninja3");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=XQaHAAXIVg8&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja3.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                  src="https://www.youtube.com/embed/3B1k5DUDXh8"

var dreamer = $("#dreamer");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=3B1k5DUDXh8&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dreamer.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                          src="https://www.youtube.com/embed/K74l26pE4YA"

var fireship2 = $("#fireship2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=K74l26pE4YA&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fireship2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                  src="https://www.youtube.com/embed/phWxA89Dy94"

var dragon2 = $("#dragon2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=phWxA89Dy94&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dragon2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                          src="https://www.youtube.com/embed/u044iM9xsWU"

var powell = $("#powell");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=u044iM9xsWU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    powell.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                  src="https://www.youtube.com/embed/fYq5PXgSsbE"

var simplified3 = $("#simplified3");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=fYq5PXgSsbE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    simplified3.attr(
      "src",
      "https://www.youtube.com/embed/" + data.items[0].id
    );
  });
//                  src="https://www.youtube.com/embed/8QSqwbSztnA"

var powell2 = $("#powell2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=8QSqwbSztnA&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    powell2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//          src="https://www.youtube.com/embed/EiNiSFIPIQE"

var dragon3 = $("#dragon3");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=EiNiSFIPIQE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dragon3.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                  src="https://www.youtube.com/embed/M3qBpPw77qo"

var media2 = $("#media2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=M3qBpPw77qo&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    media2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//          src="https://www.youtube.com/embed/69IbzTWg5PM"

var dave = $("#dave");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=69IbzTWg5PM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dave.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
