const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  nav.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', closeMenu);
  });
}

const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      if (formStatus) {
        formStatus.textContent = 'Please complete all required fields correctly.';
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = 'Thanks! Your message has been captured for follow-up.';
    }
    form.reset();
  });
}

const canvas = document.querySelector('.space-canvas');

if (canvas) {
  const context = canvas.getContext('2d');
  const stars = [];

  const setSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const seedStars = () => {
    stars.length = 0;
    const count = Math.max(70, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    for (let i = 0; i < count; i += 1) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.6 + 0.3,
        speed: Math.random() * 0.45 + 0.1,
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      context.beginPath();
      context.fillStyle = 'rgba(215, 235, 255, 0.8)';
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();

      star.y -= star.speed;
      if (star.y < -5) {
        star.y = canvas.height + 5;
        star.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(draw);
  };

  setSize();
  seedStars();
  draw();

  window.addEventListener('resize', () => {
    setSize();
    seedStars();
  });
}
