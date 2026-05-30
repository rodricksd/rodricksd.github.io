(function($) {
  // ── Nav ──
  var navList = document.getElementById("nav");
  var mobileToggle = document.getElementById("mobile-nav-toggle");
  var navWrap = document.getElementById("nav-wrap");

  function updateLandingNav() {
    if (!navWrap) return;
    var transitionDistance = Math.max(window.innerHeight * 0.72, 420);
    var progress = Math.min(1, Math.max(0, window.scrollY / transitionDistance));
    var compactHeight = window.innerWidth <= 768 ? 56 : 112;
    var landingHeight = window.innerHeight - ((window.innerHeight - compactHeight) * progress);
    var startLogo = window.innerWidth <= 768 ? 270 : 480;
    var logoSize = startLogo;
    var logoOpacity = Math.max(0, 1 - (progress / 0.62));
    var logoTop = window.innerHeight / 2;
    var vignetteOpacity = Math.max(0, 1 - (progress / 0.62));
    var minBrand = window.innerWidth <= 390 ? 20 : window.innerWidth <= 480 ? 24 : 32;
    var startBrand = Math.min(Math.max(window.innerWidth * 0.042, minBrand), 60);
    var endBrand = window.innerWidth <= 768 ? 17 : 22;
    var brandSize = startBrand - ((startBrand - endBrand) * progress);
    var brandMargin = 8 - (6 * progress);
    var startTitleBottom = window.innerWidth <= 768 ? 92 : 118;
    var endTitleBottom = window.innerWidth <= 768 ? 12 : 58;
    var titleBottom = startTitleBottom - ((startTitleBottom - endTitleBottom) * progress);
    var startSubtitle = Math.min(Math.max(window.innerWidth * 0.017, 16), 20);
    var endSubtitle = 13;
    var subtitleSize = startSubtitle - ((startSubtitle - endSubtitle) * progress);
    var navOpacity = Math.min(1, Math.max(0, (progress - 0.74) / 0.26));

    navWrap.style.setProperty("--landing-progress", progress.toFixed(3));
    navWrap.style.setProperty("--landing-height", landingHeight.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-logo-size", logoSize.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-logo-opacity", logoOpacity.toFixed(3));
    navWrap.style.setProperty("--landing-logo-top", logoTop.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-vignette-opacity", vignetteOpacity.toFixed(3));
    navWrap.style.setProperty("--landing-brand-size", brandSize.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-brand-margin", brandMargin.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-title-bottom", titleBottom.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-subtitle-size", subtitleSize.toFixed(1) + "px");
    navWrap.style.setProperty("--landing-nav-opacity", navOpacity.toFixed(3));
    navWrap.classList.toggle("nav-compact", progress >= 1);
  }

  updateLandingNav();
  window.addEventListener("scroll", updateLandingNav, { passive: true });
  window.addEventListener("resize", updateLandingNav);

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
