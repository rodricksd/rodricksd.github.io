(function($) {
  // ── Nav ──
  var navList = document.getElementById("nav");
  var mobileToggle = document.getElementById("mobile-nav-toggle");

  mobileToggle.addEventListener("click", function() {
    navList.classList.toggle("open");
  });

  // Close dropdown after a nav link is clicked on mobile
  document.querySelectorAll("#nav a").forEach(function(link) {
    link.addEventListener("click", function() {
      navList.classList.remove("open");
    });
  });

  // Close dropdown when clicking outside the nav
  document.addEventListener("click", function(e) {
    if (navList.classList.contains("open") && !document.getElementById("nav-wrap").contains(e.target)) {
      navList.classList.remove("open");
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);
