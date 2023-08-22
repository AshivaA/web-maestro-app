var js1 = $("#js1");
//qoSksQ4s_hg
fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qoSksQ4s_hg&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=iWOYAxlnaww&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JzZFccCEgGA&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=quJzdnXuNDc&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=QLatPwsbDrQ&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=FZzyij43A54&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=vWX2eoi3bOc&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=_Xf6g1ZYxiI&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=RpU7NezV8PM&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=7W4pQQ20nJg&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4uVwGw317QM&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=R8rmfD9Y5-c&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=OMoxLUxW7Wc&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=FOD408a0EzU&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=KH57lIgwe2g&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xUI5Tsl2JpY&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=uLmdvseykQM&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4r72b1ScPLY&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=6I3qMe-jXDs&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=GpOO5iKzOmY&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=0ik6X4DJKCc&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Az5J_EkhYCY&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=XF1_MlZ5l6M&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ubw2hdQIl4E&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=JjIvF0yikGU&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=2n5EBLBHx-A&key=AIzaSyDlQmEuNWa7_szWM7C1tqYStAscXgQ4dL0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    bless.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
