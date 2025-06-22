// Simple form alert handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
// Scroll Spy: highlight nav links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("active");
}

// Close sidebar when a nav link is clicked (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    // Only auto-close on small screens
    if (window.innerWidth <= 768) {
      document.querySelector(".sidebar").classList.remove("active");
    }
  });
});

const nameText = "BOOMADEVI S";
const titleText = "WEB DEVELOPER FROM KEC";
const typedText = document.getElementById("typed-text");
const subText = document.getElementById("sub-text");

let nameIndex = 0;
let titleIndex = 0;

function typeName() {
  if (nameIndex <= nameText.length) {
    typedText.textContent = nameText.substring(0, nameIndex);
    nameIndex++;
    setTimeout(typeName, 150);
  } else {
    setTimeout(() => {
      typeTitle();
    }, 800);
  }
}

function typeTitle() {
  if (titleIndex <= titleText.length) {
    subText.textContent = titleText.substring(0, titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 120);
  } else {
    setTimeout(() => {
      resetTyping();
    }, 2000);
  }
}

function resetTyping() {
  nameIndex = 0;
  titleIndex = 0;
  typedText.textContent = "";
  subText.textContent = "";
  setTimeout(typeName, 1000);
}

typeName();
const resumeBtn = document.getElementById("resume-btn");
const modal = document.getElementById("resume-modal");
const closeBtn = document.querySelector(".close-btn");

resumeBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
