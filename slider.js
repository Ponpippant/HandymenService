<script>
  let slideIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let bars = document.querySelectorAll('.bar');
  let interval = setInterval(nextSlide, 5000); // เลื่อนทุก 5 วินาที

  function showSlide(index) {
    const slideContainer = document.querySelector('.slides');
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;

    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateBars();
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function changeSlide(n) {
    showSlide(slideIndex + n);
    resetInterval();
  }

  function goToSlide(n) {
    showSlide(n);
    resetInterval();
  }

  function updateBars() {
    bars.forEach((bar, i) => {
      bar.style.background = i === slideIndex ? 'white' : '#bbb';
    });
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  // เริ่มต้น
  showSlide(slideIndex);
</script>
