// Section 4
$("#projek .card").mouseover(function () {
  $(this).find(".tools").addClass("show-tools");
});
$("#projek .card").mouseout(function () {
  $(this).find(".tools").removeClass("show-tools");
});

lightbox.option({
  disableScrolling: true
});

// button scroll up
$(window).on("scroll", function () {
  yAxis = this.scrollY;
  if (yAxis >= 273) {
    $(".btn-scroll-up").removeClass("hide-btn-scroll-up");
  } else {
    $(".btn-scroll-up").addClass("hide-btn-scroll-up");
  }
});

$("#btn-scroll-up").click(function () {
  $("html").animate(
    {
      scrollTop: $("html").offset().top
    },
    1000
  );
});

// smoot scroll
$(".nav-link").on("click", function (e) {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
  var tujuan = $(this).attr("href");
  let elementTujuan = $(tujuan);

  $("html,body").animate(
    {
      scrollTop: elementTujuan.offset().top - 120
    },
    100,
    "swing"
  );
  e.preventDefault();
});
