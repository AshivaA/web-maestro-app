var card1 = $("#card1");
//qoSksQ4s_hg                                                      src="https://www.youtube.com/embed/BvJYXl2ywUE"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=BvJYXl2ywUE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card1.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var card2 = $("#card2");
//qoSksQ4s_hg                                src="https://www.youtube.com/embed/LGQuIIv2RVA"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=LGQuIIv2RVA&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card2.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

var card3 = $("#card3");
//
//                                               src="https://www.youtube.com/embed/Y1BlT4_c_SU"

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Y1BlT4_c_SU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card3.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                                         src="https://www.youtube.com/embed/cZCq8lQ-vZ0"

var card4 = $("#card4");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=cZCq8lQ-vZ0&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card4.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                                         src="https://www.youtube.com/embed/H50ECwjgQ7s"

var card5 = $("#card5");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=H50ECwjgQ7s&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card5.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                                         src="https://www.youtube.com/embed/bWPMSSsVdPk"

var card6 = $("#card6");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=bWPMSSsVdPk&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card6.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                           src="https://www.youtube.com/embed/29iRX6f_TXM"

var card7 = $("#card7");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=29iRX6f_TXM&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card7.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                       src="https://www.youtube.com/embed/bupWPZdXqIA"

var card8 = $("#card8");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=bupWPZdXqIA&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card8.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                  src="https://www.youtube.com/embed/XXrpsQqAlIQ"

var card9 = $("#card9");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=XXrpsQqAlIQ&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card9.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                     src="https://www.youtube.com/embed/vNOyRZIkC7o"

var card10 = $("#card10");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=vNOyRZIkC7o&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card10.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                              src="https://www.youtube.com/embed/IJWcX2EDAKg"

var card11 = $("#card11");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=IJWcX2EDAKg&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card11.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                                          src="https://www.youtube.com/embed/MnaKa7igX7k"

var card12 = $("#card12");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=MnaKa7igX7k&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card12.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                                                          src="https://www.youtube.com/embed/mNRzWMH5xK0"

var card13 = $("#card13");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=mNRzWMH5xK0&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card13.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                              src="https://www.youtube.com/embed/XxZPrn1VFTc"

var card14 = $("#card14");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=XxZPrn1VFTc&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card14.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                            src="https://www.youtube.com/embed/UWdepvkLE8U"

var card15 = $("#card15");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=UWdepvkLE8U&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card15.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                                      src="https://www.youtube.com/embed/g6xsNHnAmlE"

var card16 = $("#card16");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=g6xsNHnAmlE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card16.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                           src="https://www.youtube.com/embed/f8pAb3IuECk"

var card17 = $("#card17");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=f8pAb3IuECk&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card17.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                          src="https://www.youtube.com/embed/HeQvQEiGMKk"

var card18 = $("#card18");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=HeQvQEiGMKk&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card18.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                         src="https://www.youtube.com/embed/xkF-cKpzREU"

var card19 = $("#card19");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xkF-cKpzREU&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card19.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                         src="https://www.youtube.com/embed/-XQlr727A8w"

var card20 = $("#card20");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=-XQlr727A8w&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card20.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  }); //dcode                                src="https://www.youtube.com/embed/fNcJuPIZ2WE"

var card21 = $("#card21");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=fNcJuPIZ2WE&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card21.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });

//dcode                             src="https://www.youtube.com/embed/ywtkJkxJsdg"

var card22 = $("#card22");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ywtkJkxJsdg&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card22.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                                       src="https://www.youtube.com/embed/iDA0kF5lrVk"

var card23 = $("#card23");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=iDA0kF5lrVk&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card23.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
//dcode                            src="https://www.youtube.com/embed/kNcJKPRUjuY"

var card24 = $("#card24");

fetch(
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=kNcJKPRUjuY&key=AIzaSyBzS2A1Ecw88g0AHeGomp6Td1sWTqdUAWw"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card24.attr("src", "https://www.youtube.com/embed/" + data.items[0].id);
  });
