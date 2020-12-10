$(function () {
  let cardData = {};

  $.get("https://json-project3.herokuapp.com/products").then(function (data) {
    cardData = data;
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
