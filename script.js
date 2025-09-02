 // Menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('show');
});



const productContainer = document.querySelector('.product-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let scrollAmount = 0;
const scrollPerClick = 220; // Width of one product-card + margin

nextButton.addEventListener('click', () => {
    productContainer.scrollTo({
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth'
    });
    if (scrollAmount >= productContainer.scrollWidth - productContainer.clientWidth) {
        scrollAmount = 0;
    }
});

prevButton.addEventListener('click', () => {
    productContainer.scrollTo({
        left: (scrollAmount -= scrollPerClick),
        behavior: 'smooth'
    });
    if (scrollAmount < 0) {
        scrollAmount = productContainer.scrollWidth - productContainer.clientWidth;
    }
});

//Scroll Reveal

ScrollReveal().reveal('.hero-content h1', {
  duration: 3000,
  distance: '1000px'
});

ScrollReveal().reveal('.hero-content p', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.hero-image img', {
  duration: 4000,
  distance: '1000px',
  origin: 'right'
});

ScrollReveal().reveal('.hero-image .hero1', {
  duration: 4000,
  distance: '1000px',
  origin: 'bottom'
});

ScrollReveal().reveal('.skin-glow-section h2', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.card-container', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefits-content', {
  duration: 3000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.benefit-list li', {
  duration: 3000,
  distance: '200px',
  origin: 'left',
  reset: true
});

ScrollReveal().reveal('.benefit-image', {
  duration: 3000,
  distance: '200px',
  origin: 'right',
  reset: true
});

ScrollReveal().reveal('.product-section h1', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.article-section h1', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

ScrollReveal().reveal('.footer-section', {
  duration: 2000,
  distance: '200px',
  origin: 'bottom',
  reset: true
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px'; 
    header.style.transition = 'top 0.3s ease';
  } else {
    header.style.top = '0';
    header.style.transition = 'top 0.3s ease';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".nav-right a");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (this.id !== "user-btn") e.preventDefault();

      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        if (dropdown !== this.nextElementSibling) {
          dropdown.classList.remove("active");
        }
      });

      const dropdown = this.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle("active");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-right")) {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
});

const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formTitle = document.getElementById("form-title");

if (showSignup && showLogin) {
  showSignup.addEventListener("click", (e) => {
    e.preventDefault();  
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    formTitle.textContent = "Üye Ol";
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault(); 
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    formTitle.textContent = "Giriş Yap";
  });
}

// Menüdeki linklere müdahale etme, normal link gibi kalsın

// Sepete ekleme 

document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("cart-btn");
  const cartDropdown = document.getElementById("cart-dropdown");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cartItems = [];

  function updateCart() {
    if (cartItems.length === 0) {
      cartDropdown.innerHTML = "<p>Sepetin boş.</p>";
    } else {
      cartDropdown.innerHTML = `
        <ul class="cart-list">
          ${cartItems.map((item, index) => `
            <li class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-image">
              <span class="cart-name">${item.name}</span>
              <button class="remove-item" data-index="${index}">❌</button>
            </li>
          `).join('')}
        </ul>
      `;
    }

    // Sepetten çıkarma
    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        cartItems.splice(index, 1);
        updateCart();
      });
    });
  }

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const name = this.getAttribute("data-product");
      const image = this.getAttribute("data-image");

      cartItems.push({ name, image });
      updateCart();
    });
  });

  cartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    cartDropdown.classList.toggle("show");
  });

  // Dışarı tıklayınca sepeti kapat
  document.addEventListener("click", function (e) {
    if (!cartDropdown.contains(e.target) && !cartBtn.contains(e.target)) {
      cartDropdown.classList.remove("show");
    }
  });
});

//search
const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("search-overlay");
const closeSearch = document.getElementById("close-search");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchOverlay.style.display = "flex";
});

closeSearch.addEventListener("click", function () {
    searchOverlay.style.display = "none";
});
