/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

/* ============================================================
   FILTER TABS (portfolio page)
   ============================================================ */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const cats = (card.dataset.category || '').split(' ');
          card.classList.toggle('hidden', !cats.includes(filter));
        }
      });
    });
  });
})();

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
(function () {
  const page = window.location.pathname;
  document.querySelectorAll('.nav__links a').forEach((a) => {
    if (a.getAttribute('href') && page.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
})();
