// // $(document).ready(function () {
// $(".footer-links-wrapper h3").click(function () {
//   if ($(window).width() <= 768) {
//     $(this).next("ul").slideToggle();
//   }
// });
// // });

// $(document).ready(function () {
$(".footer-links-wrapper h3").click(function () {
  if ($(window).width() <= 768) {
    let $h3 = $(this);
    let currentList = $(this).next("ul");

    $(".footer-links-wrapper ul").not(currentList).slideUp();

    currentList.slideToggle();
    $h3.toggleClass("expanded");
  }

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".footer-links-wrapper ul").show();
    }
  });
});

// });
