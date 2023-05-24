const $contactForm = document.querySelector('#contact-form');

function formSubmit(event) {
  event.preventDefault();
  const submission = {};
  submission.name = $contactForm.elements.name.value;
  submission.email = $contactForm.elements.email.value;
  submission.message = $contactForm.elements.message.value;
  console.log('submission data:', submission);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', formSubmit, true);
