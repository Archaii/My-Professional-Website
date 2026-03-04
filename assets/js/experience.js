(function(){
  // Expand/collapse job details (mobile)
  const jobs = document.querySelectorAll('.job header');
  jobs.forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const job = header.parentElement;
      job.classList.toggle('open');
      const list = job.querySelector('ul');
      if (list) {
        const isOpen = job.classList.contains('open');
        list.style.display = isOpen ? 'block' : 'none';
      }
    });
  });
})();


