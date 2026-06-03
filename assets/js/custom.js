(function($) {
  // ── Nav ──
  var navList = document.getElementById("nav");
  var mobileToggle = document.getElementById("mobile-nav-toggle");
  var navWrap = document.getElementById("nav-wrap");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function initLandingLightTrails() {
    if (!navWrap || reducedMotion.matches) return;

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var logo = navWrap.querySelector(".dlr-logo-nav");
    var brand = navWrap.querySelector(".nav-brand");
    var subtitle = navWrap.querySelector(".nav-subtitle");
    var nodes = [];
    var pkt = null;
    var width = 0;
    var height = 0;
    var pixelRatio = 1;
    var lastTime = 0;
    var nextSpawn = 800;
    var safeZones = [];

    canvas.className = "landing-light-trails";
    canvas.setAttribute("aria-hidden", "true");
    navWrap.insertBefore(canvas, navWrap.firstChild);

    function random(min, max) {
      return min + Math.random() * (max - min);
    }

    function addSafeZoneFor(element, paddingX, paddingY) {
      if (!element) return;
      var navRect = navWrap.getBoundingClientRect();
      var rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      safeZones.push({
        left: rect.left - navRect.left - paddingX,
        top: rect.top - navRect.top - paddingY,
        right: rect.right - navRect.left + paddingX,
        bottom: rect.bottom - navRect.top + paddingY
      });
    }

    function updateSafeZones() {
      safeZones = [];
      addSafeZoneFor(logo, window.innerWidth <= 768 ? 42 : 70, window.innerWidth <= 768 ? 34 : 54);
      addSafeZoneFor(brand, 90, 36);
      addSafeZoneFor(subtitle, 80, 30);
    }

    function isInSafeZone(x, y) {
      return safeZones.some(function(zone) {
        return x >= zone.left && x <= zone.right && y >= zone.top && y <= zone.bottom;
      });
    }

    function resizeCanvas() {
      var nextWidth = Math.max(1, Math.round(window.innerWidth));
      var nextHeight = Math.max(1, Math.round(window.innerHeight));
      var nextPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      updateSafeZones();
      if (nextWidth === width && nextHeight === height && nextPixelRatio === pixelRatio) return;
      width = nextWidth;
      height = nextHeight;
      pixelRatio = nextPixelRatio;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildNodes();
    }

    function connDist() {
      return window.innerWidth <= 768 ? 90 : 110;
    }

    function buildNodes() {
      pkt = null;
      nodes = [];
      var count = window.innerWidth <= 768 ? 16 : Math.round(Math.min(32, Math.max(26, width / 64)));
      var attempts = 0;
      while (nodes.length < count && attempts < count * 8) {
        attempts++;
        var x = random(width * 0.04, width * 0.96);
        var y = random(height * 0.08, height * 0.92);
        if (isInSafeZone(x, y)) continue;
        nodes.push({ x: x, y: y, vx: random(-9, 9), vy: random(-5, 5) });
      }
    }

    function neighbors(idx) {
      var n = nodes[idx];
      if (!n || isInSafeZone(n.x, n.y)) return [];
      var cd = connDist();
      var result = [];
      for (var i = 0; i < nodes.length; i++) {
        if (i === idx || isInSafeZone(nodes[i].x, nodes[i].y)) continue;
        var dx = nodes[i].x - n.x, dy = nodes[i].y - n.y;
        if (Math.sqrt(dx * dx + dy * dy) < cd) result.push(i);
      }
      return result;
    }

    function spawnPacket() {
      var startIdx = Math.floor(Math.random() * nodes.length);
      var nb = neighbors(startIdx);
      if (!nb.length) return;
      pkt = {
        fromIdx: startIdx,
        toIdx: nb[Math.floor(Math.random() * Math.min(nb.length, 3))],
        prevIdx: -1,
        t: 0, age: 0, maxAge: random(2800, 4500)
      };
    }

    function animate(now) {
      if (!lastTime) lastTime = now;
      var delta = Math.min(now - lastTime, 48);
      lastTime = now;

      resizeCanvas();

      // Move nodes
      nodes.forEach(function(n) {
        n.x += n.vx * delta / 1000;
        n.y += n.vy * delta / 1000;
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > width) { n.x = width; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > height) { n.y = height; n.vy = -Math.abs(n.vy); }
      });

      ctx.clearRect(0, 0, width, height);

      var cd = connDist();

      // Passive edges — always visible, fade by distance
      for (var i = 0; i < nodes.length; i++) {
        if (isInSafeZone(nodes[i].x, nodes[i].y)) continue;
        for (var j = i + 1; j < nodes.length; j++) {
          if (isInSafeZone(nodes[j].x, nodes[j].y)) continue;
          var edx = nodes[j].x - nodes[i].x, edy = nodes[j].y - nodes[i].y;
          var ed = Math.sqrt(edx * edx + edy * edy);
          if (ed > cd) continue;
          ctx.strokeStyle = "rgba(197, 168, 128, " + ((1 - ed / cd) * 0.13).toFixed(3) + ")";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      // Node dots
      nodes.forEach(function(n) {
        if (isInSafeZone(n.x, n.y)) return;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(197, 168, 128, 0.22)";
        ctx.fill();
      });

      if (!navWrap.classList.contains("nav-compact")) {
        if (!pkt && now >= nextSpawn) {
          spawnPacket();
          nextSpawn = now + random(1000, 2200);
        }
      }

      if (pkt) {
        pkt.age += delta;
        pkt.t = Math.min(1, pkt.t + delta * 0.65 / 1000);

        var fadeIn  = Math.min(1, pkt.age / 300);
        var fadeOut = Math.min(1, (pkt.maxAge - pkt.age) / 400);
        var a = Math.max(0, Math.min(fadeIn, fadeOut));

        var fn = nodes[pkt.fromIdx], tn = nodes[pkt.toIdx];
        if (fn && tn && a > 0) {
          var px = fn.x + (tn.x - fn.x) * pkt.t;
          var py = fn.y + (tn.y - fn.y) * pkt.t;

          // Active edge in screen mode
          ctx.save();
          ctx.globalCompositeOperation = "screen";
          ctx.strokeStyle = "rgba(197, 168, 128, " + (a * 0.55).toFixed(3) + ")";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(fn.x, fn.y);
          ctx.lineTo(tn.x, tn.y);
          ctx.stroke();
          ctx.restore();

          // Glowing packet dot
          ctx.save();
          ctx.shadowBlur = 14;
          ctx.shadowColor = "rgba(228, 198, 145, 0.95)";
          ctx.beginPath();
          ctx.arc(px, py, 3.4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 245, 220, " + (a * 0.92).toFixed(3) + ")";
          ctx.fill();
          ctx.restore();
        }

        if (pkt.t >= 1) {
          pkt.prevIdx = pkt.fromIdx;
          pkt.fromIdx = pkt.toIdx;
          var nb = neighbors(pkt.fromIdx);
          var forward = nb.filter(function(i) { return i !== pkt.prevIdx; });
          var candidates = forward.length ? forward : nb;
          if (candidates.length && pkt.age < pkt.maxAge) {
            pkt.toIdx = candidates[Math.floor(Math.random() * Math.min(candidates.length, 3))];
            pkt.t = 0;
          } else {
            pkt = null;
          }
        }

        if (pkt && pkt.age >= pkt.maxAge) pkt = null;
      }

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    requestAnimationFrame(animate);
  }

  function updateLandingNav() {
    if (!navWrap) return;
    var transitionFactor = window.innerWidth >= 1600 ? 0.9 : 0.72;
    var transitionDistance = Math.max(window.innerHeight * transitionFactor, 420);
    var progress = Math.min(1, Math.max(0, window.scrollY / transitionDistance));
    var compactHeight = window.innerWidth <= 768 ? 64 : 112;
    var landingHeight = window.innerHeight - ((window.innerHeight - compactHeight) * progress);
    var startLogo = window.innerWidth <= 768 ? 270 : Math.min(Math.max(window.innerWidth * 0.3, 480), 620);
    var logoSize = startLogo;
    var logoOpacity = Math.max(0, 1 - (progress / 0.62));
    var logoTop = window.innerHeight / 2;
    var vignetteOpacity = Math.max(0, 1 - (progress / 0.62));
    var minBrand = window.innerWidth <= 390 ? 17 : window.innerWidth <= 480 ? 20 : 32;
    var startBrand = Math.min(Math.max(window.innerWidth * 0.042, minBrand), 72);
    var endBrand = window.innerWidth <= 768 ? 17 : 22;
    var brandSize = startBrand - ((startBrand - endBrand) * progress);
    var brandMargin = 8 - (6 * progress);
    var startTitleBottom = window.innerWidth <= 768 ? 92 : 118;
    var endTitleBottom = window.innerWidth <= 768 ? 8 : 58;
    var titleBottom = startTitleBottom - ((startTitleBottom - endTitleBottom) * progress);
    var startSubtitle = Math.min(Math.max(window.innerWidth * 0.017, 16), 26);
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

  var _navRafPending = false;
  function _scheduleNavUpdate() {
    if (!_navRafPending) {
      _navRafPending = true;
      requestAnimationFrame(function() {
        _navRafPending = false;
        updateLandingNav();
      });
    }
  }

  updateLandingNav();
  initLandingLightTrails();
  window.addEventListener("scroll", _scheduleNavUpdate, { passive: true });
  window.addEventListener("resize", _scheduleNavUpdate);

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
