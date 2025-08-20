
const items = document.querySelectorAll(".text-slider li");
const textArray = Array.from(items).map(item => item.textContent.trim());

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 80;
const delayBetweenWords = 1500;

function typeEffect() {
    currentText = textArray[textIndex];

    if (isDeleting) {
        document.getElementById("typewriter").textContent = currentText.substring(0, charIndex--);
    } else {
        document.getElementById("typewriter").textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();


// Images Tab

const myAllImages = [
    // Logo images
    { src: './assets/img/portfolio/logo-design/logo-design (1).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (2).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (3).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (4).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (5).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (6).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (7).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (8).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (9).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (10).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (11).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (12).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (13).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (14).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (15).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (16).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (17).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (18).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (19).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (20).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (21).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (22).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (23).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (24).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (25).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (26).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (27).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (28).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (29).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (30).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (31).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (32).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (33).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (34).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (35).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (36).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (37).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (38).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (39).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (40).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (41).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (42).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (43).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (44).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (45).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (46).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (47).webp', cat: 'logo' },
    { src: './assets/img/portfolio/logo-design/logo-design (48).webp', cat: 'logo' },

    // Branding images
    { src: './assets/img/portfolio/branding/branding (1).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (2).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (3).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (4).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (5).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (6).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (7).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (8).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (9).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (10).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (11).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (12).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (13).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (14).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (15).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (16).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (17).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (18).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (19).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (20).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (21).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (22).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (23).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (24).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (25).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (26).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (27).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (28).webp', cat: 'branding' },
    { src: './assets/img/portfolio/branding/branding (1).png', cat: 'branding' },

    // Web images
    { src: './assets/img/portfolio/web-design/web (1).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (2).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (3).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (4).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (5).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (6).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (7).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (8).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (9).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (10).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (11).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (12).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (13).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (14).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (15).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (16).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (17).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (18).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (19).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (20).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (21).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (22).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (23).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (24).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (25).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (26).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (27).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (28).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (29).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (30).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (31).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (32).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (33).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (34).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (35).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (36).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (37).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (38).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (39).webp', cat: 'web' },
    { src: './assets/img/portfolio/web-design/web (40).webp', cat: 'web' },
];

let myCurrentFilter = "all";
let myVisibleCount = 6;
let currentIndex = 0;

const myGallery = document.getElementById("my-gallery");
const myLoadMoreBtn = document.getElementById("my-loadMoreBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

// Render gallery
function renderMyGallery() {
  myGallery.innerHTML = "";
  const filtered =
    myCurrentFilter === "all"
      ? myAllImages
      : myAllImages.filter(img => img.cat === myCurrentFilter);

  filtered.slice(0, myVisibleCount).forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    imgEl.loading = "lazy"; // ✅ Lazy load
    imgEl.alt = "Section Image"; // ✅ Alt text
    imgEl.width = 363; // ✅ Width
    imgEl.height = 363; // ✅ Height
    imgEl.dataset.index = index;

    imgEl.addEventListener("click", () => {
      openLightbox(filtered, index);
    });

    myGallery.appendChild(imgEl);
  });

  myLoadMoreBtn.style.display =
    myVisibleCount >= filtered.length ? "none" : "inline-block";
}

// Lightbox functions
function openLightbox(filtered, index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = filtered[currentIndex].src;

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    lightboxImg.src = filtered[currentIndex].src;
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % filtered.length;
    lightboxImg.src = filtered[currentIndex].src;
  };

  closeBtn.onclick = () => {
    lightbox.style.display = "none";
  };

  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  };
}

// Tabs switching
document.querySelectorAll(".my-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".my-tab-btn").forEach(b =>
      b.classList.remove("my-active")
    );
    btn.classList.add("my-active");
    myCurrentFilter = btn.dataset.filter;
    myVisibleCount = 6;
    renderMyGallery();
  });
});

// Load More
myLoadMoreBtn.addEventListener("click", () => {
  myVisibleCount += 6;
  renderMyGallery();
});

// Init
renderMyGallery();









// Read More Section


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.content').forEach(content => {
        const paragraph = content.querySelector('p');
        const btn = content.querySelector('.read-more-btn');

        if (!paragraph || !btn) return; // agar koi missing ho to skip

        // Line height nikalna
        const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
        // Kitni lines ka text hai
        const lines = Math.round(paragraph.scrollHeight / lineHeight);

        // Agar 4 lines se kam ho to button hide kar do
        if (lines <= 4) {
            btn.classList.add('hidden');
        }

        // Button click hone par expand/collapse karna
        btn.addEventListener('click', () => {
            content.classList.toggle('expanded');
            btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });
});


// Pricing Tab

document.addEventListener("DOMContentLoaded", function () {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll(".card-item");

    function showTab(tabName) {
        // Hide all cards
        cards.forEach(card => {
            card.style.display = card.getAttribute("data-category") === tabName ? "block" : "none";
        });

        // Remove active class from all buttons
        tabBtns.forEach(btn => btn.classList.remove("active"));

        // Add active class to selected button
        const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
        if (activeBtn) activeBtn.classList.add("active");
    }

    // Tab click event
    tabBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            showTab(this.getAttribute("data-tab"));
        });
    });

    // Show "web-design" tab by default on page load
    showTab("web-design");
});

