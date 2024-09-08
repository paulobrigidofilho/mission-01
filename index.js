// ======================================== //
//              INDEX JS                    //
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

// ======================================== //
//              INTERACTIVE NAV
// ======================================== //

// ======================================== //
//              Likes Counter
// ======================================== //

// ===== Likes Section - Selecting HTML Elements ===== //

let likesData = document.getElementById("likesData");
const likesBut = document.getElementById("likesBut");

// ===== Creating an empty count for future Likes ===== //
let likesCount = 0;

likesBut.addEventListener("click", () => {
  likesCount++;
  likesData.textContent = likesCount;
});

// ======================================================================================//

// ======================================== //
//           Comments Display / Counter     //
// ======================================== //

// ===== Comments Section - Selecting HTML Elements ===== //

const commentSection = document.querySelector(".comment-section");
const commentButton = document.getElementById("commentBut");
const commentData = document.getElementById("commentData");
const userName = document.getElementById("userName");
const userComment = document.getElementById("userComment");
const commentsDisplay = document.getElementById("comments-container");

// ===== Hidden Comments Section - Open when you click the Comments Button ===== //

//  Clicking the commentButton checks if the comments are currently visible ("block").
//  If they are, the button hides them ("none"). If they are hidden, the button shows them ("block").

commentButton.addEventListener("click", () => {
  commentSection.style.display =
    commentSection.style.display === "block" ? "none" : "block";
});

// ===== Creating an empty Array for future Comments ===== //

const commentsTotal = [];

// ======================================== //
//              addComment Function
// ======================================== //

function addComment(event) {
  event.preventDefault(); // Prevent the default behavior of our button to refresh the page

  // =====  Create an object and then add it to the commentsTotal array ===== //
  const commentToAdd = {
    name: userName.value,
    comment: userComment.value,
  };

  // Test
  // console.log("Comment to add:", commentToAdd);

  // =====  Add the new object to the commentsTotal Array ===== //
  commentsTotal.push(commentToAdd);

  // Test
  // console.log("Total of Comments:", commentsTotal);

  // =====  Clear up the input fields ===== //
  userName.value = "";
  userComment.value = "";

  // =====  Call the function that will re-render the array on the page with the new updates ===== //
  displayCommentsTotal();

  // =====  Update the comment counter ===== //
  commentData.textContent = commentsTotal.length;
}

// ===== Event listener to Submit button ===== //

const submitButton = document.getElementById("userSubmitMsg");
submitButton.addEventListener("click", addComment);

// ======================================================================================//

// ======================================== //
//        displayCommentsTotal Function     //
// ======================================== //

function displayCommentsTotal() {
  // ===== clear the display =====
  commentsDisplay.innerHTML = "";

  // ===== Check for no comments and display message =====
  if (commentsTotal.length === 0) {
    commentsDisplay.innerHTML = `<tag id="noComments">No comments have been made yet...</br></br> Be the first to comment!</tag>`;
  } else {
    // ===== For each item in the commentsTotal array, display the comment =====
    for (let i = 0; i < commentsTotal.length; i++) {
      const comment = commentsTotal[i];
      commentsDisplay.innerHTML += `
        <div id="commentDisplay">
          <p id="userNameInput"><b>By: ${comment.name}</b></p>
          <p id="userCommentInput"><b>Message: </b></br></br> ${comment.comment}</p>
        </div>
        <div id="deleteIcon"><i class="fa-solid fa-circle-xmark" onclick="deleteComment(${i})"></i><div>
      `;
    }
  }

  // ===== Update the comment counter =====
  commentData.textContent = commentsTotal.length;
}

// ======================================================================================//

// ======================================== //
//              deleteComment Function
// ======================================== //

function deleteComment(indexOfItemToDelete) {
  commentsTotal.splice(indexOfItemToDelete, 1);

  // Test
  // console.log("Index of the item to Delete: ", indexOfItemToDelete);

  // ===== Call the function that will re-render the array onto the page with new updates =====
  displayCommentsTotal();
}

// ======================================================================================//
