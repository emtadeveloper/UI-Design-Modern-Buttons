// jQuery  container-right

$(document).ready(function () {
    $(".button").click(function () {
      if ($(this).hasClass("expand")) {
        $("ul").slideUp(function () {
          $(".button").removeClass("expand");
          $(".fas").removeClass("expand");
        });
      } else {
        $(this).addClass("expand");
        setTimeout(function () {
          $(".fas").addClass("expand");
          $("ul").stop().slideDown();
        }, 200);
      }
    });
  });
