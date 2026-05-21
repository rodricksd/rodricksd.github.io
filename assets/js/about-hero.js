(function () {
  var stage = document.getElementById("about-scroll-stage");
  if (!stage) return;

  var scene = stage.querySelector(".about-hero-scene");
  var panel = stage.querySelector(".about-hero-panel");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

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

  function updateScrollProgress() {
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
        measurePanelHeight();
      }
      scene.classList.toggle("about-hero-scene--composed", isComposed);
      scene.classList.toggle("about-hero-scene--mobile-settled", progress >= 0.85);
    }
  }

  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", function () {
    if (panel) panel.style.removeProperty("--panel-height");
    updateScrollProgress();
  });
  updateScrollProgress();
})();
