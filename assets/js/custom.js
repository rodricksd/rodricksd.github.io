(function($) {
  // ── Theme toggle ──
  var html = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");
  var themeIcon = themeBtn.querySelector("i");

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    themeIcon.className = theme === "dark" ? "fa fa-sun-o" : "fa fa-moon-o";
  }

  var saved = localStorage.getItem("theme");
  if (saved) {
    applyTheme(saved);
  } else {
    applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  themeBtn.addEventListener("click", function() {
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

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
