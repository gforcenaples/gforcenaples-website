document.querySelector('.menu').addEventListener('click',function(){const n=document.querySelector('#nav');const open=n.classList.toggle('open');this.setAttribute('aria-expanded',String(open))});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#nav').classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();


// Submit in the background so customers stay on the G-Force website.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const feedback = document.getElementById('form-feedback');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    feedback.hidden = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Submission not accepted');
      contactForm.reset();
      feedback.className = 'form-feedback success';
      feedback.textContent = "Thank you for contacting G-Force Property Services! We've received your request and will be in touch soon.";
      feedback.hidden = false;
    } catch (error) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Your request could not be sent. Please try again, or call George at (239) 961-0248.';
      feedback.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Request';
    }
  });
}
