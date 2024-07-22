// Get references to the DOM elements
const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const modal = document.getElementById('modal');
const spanClose = document.querySelector('.close');
const modalContent = modal.querySelector('.modal-content');
const messageElement = document.createElement('div');

// Function to get a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Move the "No" button when hovered over
btnNo.addEventListener("mouseover", () => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

// Show the modal when the "Yes" button is clicked
btnYes.addEventListener("click", () => {
  modal.style.display = 'flex'; // Use flex to center the modal
  btnNo.classList.add("hide");   // Hide the "No" button
  imageOne.classList.add("hide"); // Hide the first image
  imageTwo.classList.remove("hide"); // Show the second image

  // Add a message
  messageElement.textContent = "";
  messageElement.classList.add('modal-message');
  modalContent.appendChild(messageElement);
});

// Ensure modal is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
  modal.style.display = 'none'; // Hide the modal initially
});
