// Interaction layer. Everything here degrades gracefully: without JS the page
// renders fully visible and static, exactly like the original design.
(function () {
  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll-in reveal ------------------------------------------------------ */

  var reveals = document.querySelectorAll(
    ".hero > *, .section-heading, .project-card, .future-project, .about-layout > *, .contact-section > *"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    docEl.classList.add("has-reveal");

    // Stagger siblings inside the same container so grouped content cascades.
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add("reveal");
      var siblings = el.parentElement ? el.parentElement.children : [];
      var position = Array.prototype.indexOf.call(siblings, el);
      el.style.transitionDelay = Math.min(position, 5) * 70 + "ms";
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* Scroll spy ------------------------------------------------------------ */

  var navLinks = document.querySelectorAll('nav a[href^="#"]');

  if ("IntersectionObserver" in window) {
    var sections = document.querySelectorAll("#work, #about");

    var visible = new Set();

    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        var current = ["work", "about"].find(function (id) { return visible.has(id); });
        navLinks.forEach(function (link) {
          if (current && link.getAttribute("href") === "#" + current) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (el) { spyObserver.observe(el); });
  }
})();
