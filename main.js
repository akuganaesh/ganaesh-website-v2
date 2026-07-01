/* Scroll reveal — bidirectional, section-scoped stagger
 *
 * Entry: stagger delay restored, 620ms ease-out (CSS .reveal.visible)
 * Exit:  delay reset to 0 so items snap out cleanly, 380ms ease-in (CSS .reveal)
 *
 * Stagger delay stored in data-reveal-delay to survive class toggles.
 */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = entry.target.dataset.revealDelay || '0ms';
        entry.target.classList.add('visible');
      } else {
        entry.target.style.transitionDelay = '0ms';
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

/* Pre-assign stagger delays by section, store in dataset, then observe */
document.querySelectorAll('section').forEach((section) => {
  section.querySelectorAll('.reveal').forEach((el, i) => {
    const delay = `${i * 100}ms`;
    el.dataset.revealDelay = delay;
    el.style.transitionDelay = delay;
    observer.observe(el);
  });
});
