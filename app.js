// ===== Selecting HTML Elements ===== //

let likesData = document.getElementById("likesData");
let likesBut = document.getElementById("likesBut");
const scrollUpButtons = document.querySelectorAll(".scrollUpBut");

// ==== Gallery HTML Elements ===== //

const buttons = ['sumerBut', 'egyptBut', 'assyriaBut', 'hitBut', 'nzBut'];
const sections = ['sectionSumer', 'sectionEgypt', 'sectionAssyria', 'sectionHit', 'sectionNZ'];

// ===== FUNCTIONS ===== //

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ===== NAVIGATION BUTTONS ====== //

scrollUpButtons.forEach(button => {
  button.addEventListener('click', topFunction);
});

// ===== INTERACTION NAV ===== //

// // Likes Counter

// let likesCount = 0; // Initialize likes count

// likesBut.addEventListener("click", () => {
//   likesCount++;
//   likesData.textContent = likesCount;
// });

// ==== GALLERY NAV BAR ===== //

buttons.forEach((buttonId, index) => {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sections[index]);

  button.addEventListener('click', () => {
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  });
});
