(function(){
  // Certificate modal functionality
  const certImages = {
    python: 'assets/images/certificates/python-cert.jpg',
    cisco: 'assets/images/certificates/cisco-cert.jpg',
    pmi: 'assets/images/certificates/pmi-cert.jpg',
    techup: 'assets/images/certificates/techup-cert.jpg',
    acm: 'assets/images/certificates/acm-membership.jpg'
  };

  window.openCertModal = function(certType) {
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    
    if (certImages[certType]) {
      modalImage.src = certImages[certType];
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  window.closeCertModal = function() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Close modal when clicking outside the image
  document.addEventListener('click', function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
      closeCertModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeCertModal();
    }
  });
})();


