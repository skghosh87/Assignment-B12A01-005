const cardHeartIcon = document.getElementById("btn-heart-icon");
const cardLoveCount = parseInt(
  document.getElementById("heart-count").innerText
);
cardHeartIcon.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Icon Clicked");
  console.log(cardLoveCount);
  const updateCardLoveCount = cardLoveCount + 1;
  document.getElementById("heart-count").innerText = updateCardLoveCount;
});
