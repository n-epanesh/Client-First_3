$(document).ready(function () {
  $(".header_burger").click(function () {
    $(".header_burger").toggleClass("open-menu");
  });
});

$(document).ready(function () {
  $(".header_burger").click(function () {
    $(".header_burger").toggleClass("open-menu");
    $(".header__nav").toggleClass("open-menu");
  });
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active");
    $("body").toggleClass("fixed-page");
  });
});
