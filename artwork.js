// ======================================== //
//              ARTWORK HTML                //
// ======================================== //

// ======================================== //
//              NAVIGATION BUTTONS
// ======================================== //

// ===== Page Buttons - HTML Elements ===== //

const scrollUpButtons = document.querySelectorAll(".scrollUpBut");

// ======================================== //
//              Scroll Up Button            //
// ======================================== //

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollUpButtons.forEach((button) => {
  button.addEventListener("click", topFunction);
});

// ======================================================================================//

// // ======================================== //
// //              GALLERY NAV BAR             //
// // ======================================== //

// // ==== Gallery Elements ===== //

const buttons = ["sumerBut", "egyptBut", "assyriaBut", "hitBut", "nzBut"];
const sections = [
  "sectionSumer",
  "sectionEgypt",
  "sectionAssyria",
  "sectionHit",
  "sectionNZ",
];

// // ======================================================================================//

buttons.forEach((buttonId, index) => {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sections[index]);

  button.addEventListener("click", () => {
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  });
});
