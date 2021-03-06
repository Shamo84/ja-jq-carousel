$(document).ready(function() {
  // CLICK SULLE FRECCE
  $(".fa-angle-left").click(function() {
    prevImage();
  });
  $(".fa-angle-right").click(function() {
    nextImage();
  });
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
