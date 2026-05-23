(function () {
  var stage = document.getElementById("about-scroll-stage");
  if (!stage) return;

  var scene = stage.querySelector(".about-hero-scene");
  var panel = stage.querySelector(".about-hero-panel");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Scroll lock state
  var lockScrollY = null;
  var lockDeltaAccum = 0;
  var lockSetAt = 0;
  var lockResetTimer = null;
  // Ignore wheel events for this many ms after the lock fires —
  // prevents the tail of the triggering swipe from immediately releasing it.
  var LOCK_INIT_IGNORE_MS = 400;
  // Wheel delta (px) needed from a new gesture to release the lock.
  var LOCK_RELEASE_DELTA = 80;

  window.addEventListener("wheel", function (e) {
    if (lockScrollY === null) return;

    // Swallow the rest of the triggering gesture
    if (performance.now() - lockSetAt < LOCK_INIT_IGNORE_MS) {
      e.preventDefault();
      return;
    }

    // After the ignore window, debounce resets accum between gestures
    clearTimeout(lockResetTimer);
    lockResetTimer = setTimeout(function () {
      lockDeltaAccum = 0;
    }, 150);

    if (e.deltaY > 0) {
      lockDeltaAccum += e.deltaY;
      if (lockDeltaAccum >= LOCK_RELEASE_DELTA) {
        lockScrollY = null;
        lockDeltaAccum = 0;
        // Don't preventDefault — let this scroll event through
      } else {
        e.preventDefault();
      }
    } else if (e.deltaY < 0) {
      // Scrolling back up: release lock immediately
      lockScrollY = null;
      lockDeltaAccum = 0;
    }
  }, { passive: false });

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function measurePanelHeight() {
    if (!panel) return;
    var figure = stage.querySelector(".about-hero-figure");
    var content = stage.querySelector(".about-hero-content");
    if (!figure || !content) return;
    var figRect = figure.getBoundingClientRect();
    var contRect = content.getBoundingClientRect();
    var top = Math.min(figRect.top, contRect.top);
    var bottom = Math.max(figRect.bottom, contRect.bottom);
    panel.style.setProperty("--panel-height", (bottom - top + 72) + "px");
  }

  function applyMobileLayout() {
    stage.style.height = "auto";
    stage.style.setProperty("--scroll-progress", "1");
    if (scene) {
      scene.classList.add("about-hero-scene--composed");
      scene.classList.add("about-hero-scene--mobile-settled");
    }
  }

  function updateScrollProgress() {
    if (window.innerWidth <= 768) {
      applyMobileLayout();
      return;
    }

    if (prefersReducedMotion) {
      stage.style.setProperty("--scroll-progress", "1");
      if (scene) scene.classList.add("about-hero-scene--composed");
      return;
    }

    var rect = stage.getBoundingClientRect();
    var scrollable = stage.offsetHeight - window.innerHeight;

    if (scrollable <= 0) {
      stage.style.setProperty("--scroll-progress", "1");
      return;
    }

    var progress = -rect.top / scrollable;
    progress = clamp(progress, 0, 1);
    stage.style.setProperty("--scroll-progress", String(progress));

    var figure = stage.querySelector(".about-hero-figure");
    if (figure) {
      figure.classList.toggle("about-hero-figure--settled", progress >= 0.35);
    }

    if (scene) {
      var wasComposed = scene.classList.contains("about-hero-scene--composed");
      var isComposed = progress >= 0.88;

      if (isComposed && !wasComposed) {
        // Snap to exactly the 0.88 threshold and lock the page there
        var stageDocTop = rect.top + window.scrollY;
        lockScrollY = Math.round(stageDocTop + 0.88 * scrollable);
        lockDeltaAccum = 0;
        lockSetAt = performance.now();
        window.scrollTo(0, lockScrollY);
        measurePanelHeight();
      }

      scene.classList.toggle("about-hero-scene--composed", isComposed);
      scene.classList.toggle("about-hero-scene--mobile-settled", progress >= 0.85);
    }
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", function () {
    lockScrollY = null;
    lockDeltaAccum = 0;
    if (panel) panel.style.removeProperty("--panel-height");
    updateScrollProgress();
  });
  updateScrollProgress();
})();
