// ======================================== //
//              ARTWORK JS                  //
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

const buttons = ["sumerBut", "egyptBut", "assyriaBut", "hitBut", "nzBut"];
const sections = [
  "sectionSumer",
  "sectionEgypt",
  "sectionAssyria",
  "sectionHit",
  "sectionNZ",
];

buttons.forEach((buttonId, index) => {      // The loop iterates over each button ID and its index. (sections)
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sections[index]);

  button.addEventListener("click", () => {
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });  // The top property is set to the offsetTop of the section element,
  });                                                                 //  which is the vertical position of the section relative to the document.
});
