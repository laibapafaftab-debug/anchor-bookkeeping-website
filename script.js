// ===== Mobile menu toggle =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ===== FAQ toggle =====
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
        openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ===== Modal =====
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const modalClose = document.getElementById('modalClose');
const modalCta = document.getElementById('modalCta');

function openModal() { modalOverlay.classList.add('open'); }
function closeModal() { modalOverlay.classList.remove('open'); }

openModalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalCta.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== Contact form validation =====
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const businessInput = document.getElementById('business');
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('formSuccess');

function setError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.closest('.field').classList.toggle('invalid', Boolean(message));
}

function validateName() {
  if (!nameInput.value.trim()) {
    setError(nameInput, 'nameError', 'Please enter your name.');
    return false;
  }
  setError(nameInput, 'nameError', '');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    setError(emailInput, 'emailError', 'Please enter your email.');
    return false;
  }
  if (!pattern.test(value)) {
    setError(emailInput, 'emailError', 'Please enter a valid email address.');
    return false;
  }
  setError(emailInput, 'emailError', '');
  return true;
}

function validateBusiness() {
  if (!businessInput.value.trim()) {
    setError(businessInput, 'businessError', 'Please tell us what kind of business this is.');
    return false;
  }
  setError(businessInput, 'businessError', '');
  return true;
}

function validateMessage() {
  if (!messageInput.value.trim()) {
    setError(messageInput, 'messageError', 'Please add a short note.');
    return false;
  }
  setError(messageInput, 'messageError', '');
  return true;
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
businessInput.addEventListener('blur', validateBusiness);
messageInput.addEventListener('blur', validateMessage);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.textContent = '';

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isBusinessValid = validateBusiness();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isBusinessValid && isMessageValid) {
    formSuccess.textContent = `Thanks, ${nameInput.value.trim()} — we'll be in touch within a day.`;
    form.reset();
  }
});
