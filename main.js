$(document).ready(function() {

  img1 = $(".images img:eq(0)");
  img2 = $(".images img:eq(1)");
  img3 = $(".images img:eq(2)");
  img4 = $(".images img:eq(3)");

// CLICK SULLE FRECCE
  $(".fa-angle-left").click(function() {
    prevImage();
  });
  $(".fa-angle-right").click(function() {
    nextImage();
  });

// TASTI DIREZIONALI
  $(document).keydown(function() {
    if (event.keyCode == 39) {
      nextImage();
    } else if (event.keyCode == 37) {
      prevImage();
    }
  });

// CLICK SUI PALLINI
  $(".nav > i").click(function() {
    removeClassActive();
    $(this).addClass("active");
    switch ($(this).index()) {
      case 0:
        img1.addClass("active");
        break;
      case 1:
        img2.addClass("active");
        break;
      case 2:
        img3.addClass("active");
        break;
      case 3:
        img4.addClass("active");
        break;
      default:
    }
  });

  // SEZIONE FUNZIONI
  function prevImage() {
    removeClassActive();
    if (activeImg.hasClass("first")) {
      $(".images .last").addClass("active");
      $(".nav .last").addClass("active");
    } else {
      activeImg.prev("img").addClass("active");
      activeCircle.prev("i").addClass("active");
    }
  }
  function nextImage() {
    removeClassActive();
    if (activeImg.hasClass("last")) {
      $(".images .first").addClass("active");
      $(".nav .first").addClass("active");
    } else {
      activeImg.next("img").addClass("active");
      activeCircle.next("i").addClass("active");
    }
  }
  function removeClassActive() {
    activeImg = $(".images .active");
    activeCircle = $(".nav .fa-circle.active");
    activeImg.removeClass("active");
    activeCircle.removeClass("active");
  }
});
