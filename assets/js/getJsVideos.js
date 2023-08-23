var js1 = $("#js1");
//qoSksQ4s_hg
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qoSksQ4s_hg&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    js1.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var ninja1 = $("#ninja1");
//
//              src="https://www.youtube.com/embed/iWOYAxlnaww"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=iWOYAxlnaww&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja1.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                               src="https://www.youtube.com/embed/JzZFccCEgGA"

var ninja2 = $("#ninja2");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JzZFccCEgGA&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//   src="https://www.youtube.com/embed/quJzdnXuNDc"
var andy = $("#andy");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=quJzdnXuNDc&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    andy.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                             src="https://www.youtube.com/embed/QLatPwsbDrQ"

var ninja3 = $("#ninja3");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=QLatPwsbDrQ&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja3.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                              src="https://www.youtube.com/embed/FZzyij43A54"

var krossing = $("#krossing");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=FZzyij43A54&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    krossing.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                               src="https://www.youtube.com/embed/vWX2eoi3bOc"

var telu = $("#telu");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=vWX2eoi3bOc&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    telu.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                src="https://www.youtube.com/embed/_Xf6g1ZYxiI"

var great = $("#great");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=_Xf6g1ZYxiI&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    great.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                  src="https://www.youtube.com/embed/RpU7NezV8PM"

var steve = $("#steve");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=RpU7NezV8PM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    steve.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                   src="https://www.youtube.com/embed/"

var simplified = $("#simplified");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=7W4pQQ20nJg&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    simplified.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                   src="https://www.youtube.com/embed/4uVwGw317QM"

var dani = $("#dani");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4uVwGw317QM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dani.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                    src="https://www.youtube.com/embed/R8rmfD9Y5-c"

var dev = $("#dev");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=R8rmfD9Y5-c&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dev.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//                                            src="https://www.youtube.com/embed/OMoxLUxW7Wc"

var danny = $("#danny");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=OMoxLUxW7Wc&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    danny.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                         src="https://www.youtube.com/embed/FOD408a0EzU"

var fun = $("#fun");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=FOD408a0EzU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fun.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                           src="https://www.youtube.com/embed/KH57lIgwe2g"

var net = $("#net");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=KH57lIgwe2g&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    net.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                            src="https://www.youtube.com/embed/"

var net2 = $("#net2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xUI5Tsl2JpY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    net2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                                   src="https://www.youtube.com/embed/uLmdvseykQM"

var dani2 = $("#dani2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=uLmdvseykQM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dani2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                           src="https://www.youtube.com/embed/4r72b1ScPLY"

var telusko = $("#telusko");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4r72b1ScPLY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    telusko.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                          src="https://www.youtube.com/embed/6I3qMe-jXDs"

var dcode = $("#dcode");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=6I3qMe-jXDs&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dcode.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                            src="https://www.youtube.com/embed/GpOO5iKzOmY"

var freecode = $("#freecode");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=GpOO5iKzOmY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    freecode.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                    src="https://www.youtube.com/embed/0ik6X4DJKCc"

var traverse = $("#traverse");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=0ik6X4DJKCc&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    traverse.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                             src="https://www.youtube.com/embed/Az5J_EkhYCY"

var ninja4 = $("#ninja4");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Az5J_EkhYCY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ninja4.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                              src="https://www.youtube.com/embed/XF1_MlZ5l6M"

var simplified3 = $("#simplified3");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=XF1_MlZ5l6M&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
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
//                              src="https://www.youtube.com/embed/ubw2hdQIl4E"

var colorcode2 = $("#colorcode2");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ubw2hdQIl4E&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    colorcode2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//                             src="https://www.youtube.com/embed/JjIvF0yikGU"

var blondiebytes = $("#blondiebytes");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JjIvF0yikGU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    blondiebytes.attr(
      "src",
      "https://www.youtube.com/embed/" + data.items[0].id
    );
  });
//                             src="https://www.youtube.com/embed/2n5EBLBHx-A"

var bless = $("#bless");
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=2n5EBLBHx-A&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    bless.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
