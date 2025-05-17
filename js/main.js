document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("bookingModal");
  const bookingForm = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");
  const reservationForm = document.getElementById("reservationForm");
  const closeSuccessBtn = document.getElementById("closeSuccessBtn");
  
  reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    bookingForm.style.display = "none";
    successMessage.style.display = "block";
  });
  

  closeSuccessBtn.addEventListener('click', function() {
    modal.style.display = "none";
    bookingForm.style.display = "block";
    successMessage.style.display = "none";
    reservationForm.reset();
  });
  
  const btn = document.getElementById("bookButton");
  const span = document.querySelector(".modal__close");
  
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });
  
  span.addEventListener('click', function() {
    modal.style.display = "none";
    bookingForm.style.display = "block";
    successMessage.style.display = "none";
    reservationForm.reset();
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      bookingForm.style.display = "block";
      successMessage.style.display = "none";
      reservationForm.reset();
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.rooms-slider');
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');
  
  let currentSlide = 0;
  const slideCount = slides.length;

  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
  }

  nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
  });

  prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
  });

  goToSlide(0);
});



document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("bookingModal").style.display = "block";
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20, 
        behavior: 'smooth' 
      });
    }
  });
});