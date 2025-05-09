document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for all anchor links with hashes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70, // offset for sticky header
          behavior: 'smooth'
        });
      }
    });
  });
}); 