
const quno = document.querySelectorAll('.quno');

Array.from(quno).forEach((qunoElement) => {
  const icon = qunoElement.querySelector('.icon');
  const answer = qunoElement.querySelector('.answer');

  qunoElement.addEventListener('click', () => {
    if(icon.classList.contains('active')){
      icon.classList.remove('active');
      answer.style.maxHeight=0;
    }else{
      icon.classList.add('active');
      answer.style.maxHeight=answer.scrollHeight +'px';
    }
  });
});


const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const submitButton = document.getElementById('submitButton');
successMessage.style.display='none';
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  successMessage.style.display = 'block';
  contactForm.reset();
  setTimeout(function() {
    successMessage.style.display = 'none';
  }, 4000);
});
