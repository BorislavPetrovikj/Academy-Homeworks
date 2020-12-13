$(function () {
  let cardData = {};
  var counter = 0;
  var counter1 = 0;
  var counter2 = 0;
  var counter3 = 0;
  var counter4 = 0;
  var counter5 = 0;
  var counter6 = 0;
  var counter7 = 0;
  var counter8 = 0;
  var counter9 = 0;

  $.get("https://json-project3.herokuapp.com/products").then(function (data) {
    cardData = data;
    $(".badgeShowAll").text(cardData.length);
    cardData.forEach((el) => {
      if (el.gender == "MALE") {
        counter++;
        $(".badgeMale").text(counter);
      }
    });
    cardData.forEach((el) => {
      if (el.gender == "FEMALE") {
        counter1++;
        $(".badgeFemale").text(counter1);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "LE GRAND BIKES") {
        counter2++;
        $(".badgelegrand").text(counter2);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "KROSS") {
        counter3++;
        $(".badgekross").text(counter3);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "EXPLORER") {
        counter4++;
        $(".badgeExplorer").text(counter4);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "VISITOR") {
        counter5++;
        $(".badgeVisitor").text(counter5);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "PONY") {
        counter6++;
        $(".badgePony").text(counter6);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "FORCE") {
        counter7++;
        $(".badgeForce").text(counter7);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "E-BIKES") {
        counter8++;
        $(".badgeEbikes").text(counter8);
      }
    });
    cardData.forEach((el) => {
      if (el.brand == "IDEAL") {
        counter9++;
        $(".badgeIdeal").text(counter9);
      }
    });

    generateCard(cardData);
  });

  // window.onload = (event) => {
  //   $(".showAllBtn").css("color", "orange");
  // };

  let adada = true;
  $(".flex-container").click(function () {
    if (adada == true) {
      $(this).css("color", "orange");
      $(this).css("font-weight", "bold");
      adada = false;
    } else {
      adada = true;
      $(this).css("color", "black");
      $(this).css("font-weight", "normal");
    }
  });
  $(".showAllBtn").click(function () {
    generateCard(cardData);
  });

  $(".maleBtn").click(function () {
    generateCard(cardData.filter((d) => d.gender == "MALE"));
  });

  $(".femaleBtn").click(function () {
    generateCard(cardData.filter((d) => d.gender == "FEMALE"));
  });

  $(".legrandBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "LE GRAND BIKES"));
  });

  $(".krossBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "KROSS"));
  });

  $(".explorerBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "EXPLORER"));
  });

  $(".visitorBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "VISITOR"));
  });

  $(".ponyBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "PONY"));
  });

  $(".forceBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "FORCE"));
  });

  $(".ebikesBTN").click(function () {
    generateCard(cardData.filter((d) => d.brand == "E-BIKES"));
  });

  $(".IdealBtn").click(function () {
    generateCard(cardData.filter((d) => d.brand == "IDEAL"));
  });

  function generateCard(data) {
    $(".cardRow").html("");
    for (let i = 0; i < data.length; i++) {
      $(".cardRow").append(
        `<div class="cardEffect col-4 p-4">
  		 <div class="thumbnail">
  		   <img class="card-img-top p-4 " src="img/${data[i].image}.png">
  		   <div class="caption p-3">
  		   <h5 class="font-weight-bold">${data[i].name}</h5>
  		  <p>${data[i].price} $</p>
  		</div>
  	  </div>
    </div>`
      );
    }
  }
});
