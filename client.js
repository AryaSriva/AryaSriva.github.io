(function ($) {
  $("nav").hide();
  $("section").hide();
  $("footer").hide();
  $("#startButton").click(function () {
    let intro = new Audio("dependencies/audio/intro.mp3");
    intro.play();
    $(this).hide();
    $("nav").delay(16000).fadeIn();
    $("footer").delay(8000).fadeIn();
    $("section").delay(12000).fadeIn();
  });
  $("#welcomeMessage").hover(
    function () {
      $(this).css("text-shadow", "0 0 10px #FFFFFF");
    },
    function () {
      $(this).css("text-shadow", "3px 5px 2px #474747");
    }
  );
  $("button").hover(
    function () {
      $(this).css("box-shadow", "0 0 10px #FFFFFF");
      $(this).css("text-shadow", "0 0 10px #474747");
    },
    function () {
      $(this).css("text-shadow", "none");
      $(this).css("box-shadow", "none");
    }
  );
  $("h1").hover(
    function () {
      $(this).css("text-shadow", "0 0 10px #FAEBD7");
    },
    function () {
      $(this).css("text-shadow", "none");
    }
  );
  $("#aboutMe").hover(
    function () {
      $(this).css("text-shadow", "3px 5px 10px #942442");
      $(this).css("font-size", "larger");
    },
    function () {
      $(this).css("text-shadow", "none");
      $(this).css("font-size", "large");
    }
  );
})(window.jQuery);
