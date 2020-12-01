$(function () {
  $(".race").on("click", function () {
    $("#race").css("opacity", "0.6");
    $("#1").fadeTo("fast", 1).delay(800).fadeTo("fast", 0);
    $("#2").delay(1000).fadeTo("fast", 1).delay(800).fadeTo("fast", 0);
    $("#3").delay(2000).fadeTo("fast", 1).delay(800).fadeTo("fast", 0);
    $(".race").attr("disabled", true);
    let interval = setInterval(() => {
      $("#race").css("opacity", "1.0");
      function checkIfComplete() {
        if (isComplete == false) {
          isComplete = true;
        } else {
          place = "second";
        }
      }
      let CarWidth = $(".car1").width();
      let raceTrackWidth = $(window).width() - CarWidth;
      let raceTime1 = Math.floor(Math.random() * 5000 + 1);
      let raceTime2 = Math.floor(Math.random() * 5000 + 1);
      let isComplete = false;
      let place = "first";
      $(".car1").animate(
        {
          left: raceTrackWidth,
        },
        raceTime1,
        function () {
          checkIfComplete();
          $(".table1")
            .text(
              `Finished in ${place} place with a time of: ${raceTime1}milliseconds `
            )
            .css("color", "white");
        }
      );
      $(".car2").animate(
        {
          left: raceTrackWidth,
        },
        raceTime2,
        function () {
          checkIfComplete();
          $(".table2")
            .text(
              `Finished in ${place} place with a time of: ${raceTime2}milliseconds `
            )
            .css("color", "white");
        }
      );
      clearInterval(interval);
      $(".finish").delay(raceTime1).fadeTo("fast", 1);
    }, 3000);
  });

  $(".startOver").on("click", function () {
    $(".race").attr("disabled", false);
    $(".finish").fadeTo("fast", 0);
    $("#car").css("left", "0");
    $("#car1").css("left", "0");
  });
});
