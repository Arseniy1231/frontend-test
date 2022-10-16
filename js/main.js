$(function() {
    function slideMenu() {
      var activeState = $("#mobile-menu-conteiner .mobile-menu-list").hasClass("active");
      $("#mobile-menu-conteiner .mobile-menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#mobile-menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#mobile-menu-conteiner .mobile-menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".mobile-menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
    });
    $(".mobile-menu-list").find(".accordion-toggle-lv2").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link-lv2").toggleClass("active");
    });
  }); 
