$(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.nav-mobile').toggleClass("on");
    $("nav ul").toggleClass('hidden');
    $("nav div").toggleClass('hidden');
  });