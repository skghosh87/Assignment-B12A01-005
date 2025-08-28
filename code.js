// Navbar Heart Counter
const cardLoveCount = document.getElementById("heart-count");

// // All Heart Card Select
const cardHeartIcon = document.querySelectorAll("#btn-heart-icon");

for (cardIcon of cardHeartIcon) {
  cardIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const updateCardLoveCount = parseInt(cardLoveCount.innerText);
    cardLoveCount.innerText = updateCardLoveCount + 1;
  });
}

const coinCount = document.getElementById("coin-count");
const callingButton = document.querySelectorAll("#btn-call");
