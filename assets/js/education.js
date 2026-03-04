(function(){
  // Simple scroll-to hash highlighting
  const links = document.querySelectorAll('.toc a');
  const sections = Array.from(document.querySelectorAll('.section-block'));
  function onScroll(){
    const top = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= top) current = s;
    }
    links.forEach(l => {
      const href = l.getAttribute('href') || '';
      const id = href.startsWith('#') ? href.slice(1) : '';
      l.style.color = (id && current.id === id) ? 'var(--accent)' : '';
    });
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


