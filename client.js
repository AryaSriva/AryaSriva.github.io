(function ($) {
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
})(window.jQuery);
