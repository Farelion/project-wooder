  
  
  const body = document.body;

  const showDialog = () => {
    if ($(".nav-mobile").hasClass("on")){
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      $('.menu-toggle').toggleClass("on");
      $('.nav-mobile').toggleClass("on");
      $("nav ul").toggleClass('hidden');
      $("nav div").toggleClass('hidden');
    }else{
      $('.menu-toggle').toggleClass("on");
      $('.nav-mobile').toggleClass("on");
      $("nav ul").toggleClass('hidden');
      $("nav div").toggleClass('hidden');
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    }
  };

  $(".nav-mobile nav ul").on("click", "li", function () {
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    $('.menu-toggle').toggleClass("on");
    $('.nav-mobile').toggleClass("on");
    $("nav ul").toggleClass('hidden');
    $("nav div").toggleClass('hidden');
 });

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });