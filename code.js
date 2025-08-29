// Navbar Heart Counter
const cardLoveCount = document.getElementById("heart-count");

// // All Heart Card Click and Counter
const cardHeartIcon = document.querySelectorAll("#btn-heart-icon");

for (cardIcon of cardHeartIcon) {
  cardIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const updateCardLoveCount = parseInt(cardLoveCount.innerText);
    cardLoveCount.innerText = updateCardLoveCount + 1;
  });
}

/**Start Call Button Code  */
const coinCount = document.getElementById("coin-count");
const callingButtons = document.querySelectorAll("#btn-call");
const callHistoryList = document.querySelector(".call-list");

// select current Date and time in hh:mm:ss AM/PM
// let now = new Date();
// let time = now.toLocaleTimeString("en-US", { hour12: true });

// for of loop for every call buttons
for (const btn of callingButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", { hour12: true });
    let totalCoins = parseInt(coinCount.innerText);

    if (totalCoins < 20) {
      alert("Insufficient coins! You need at least 20 coins to make a call.");
      return;
    }

    totalCoins -= 20;
    coinCount.innerText = totalCoins;

    const callCard = btn.closest(".card");
    const serviceName = callCard.querySelector("#card-subtitle").innerText;
    const serviceNumber = callCard.querySelector("#card-code").innerText;
    const cardTitle = callCard.querySelector("#card-title").innerText;
    // show alert when call button is clicked.
    alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);

    // started call history section functionality
    const cartHistory = document.createElement("div");
    cartHistory.classList.add("call-list");
    cartHistory.innerHTML = `<div class="flex justify-between items-center bg-[#FAFAFA] rounded-lg p-4">
        <div>
          <h6 class="inter-font font-semibold text-sm text-[#111111]">${cardTitle}</h6>
          <p class="hind-madurai-font text-lg text-[#5C5C5C]">${serviceNumber}</p>
        </div>
        <div>
          <p class="hind-madurai-font text-sm text-[#111111]">${time}</p>
        </div>
      </div>`;
    callHistoryList.prepend(cartHistory);
  });
}
// Clear History button Functionalities

const btnClear = document.getElementById("btn-clear");

btnClear.addEventListener("click", function () {
  //  Remove all children inside callHistoryList
  callHistoryList.innerHTML = "";
});

/**Start Copy Button Counter Code */
const counterCopy = document.querySelector("#copy-counter");
const buttonCopy = document.querySelectorAll("#btn-copy");

// Counter Initialization
let counter = 0;

for (const btn of buttonCopy) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const cardItem = btn.closest(".card");
    // console.log(cardItem);
    const cardNumberCount = cardItem.querySelector("#card-code").innerText;
    // console.log(cardNumberCount);

    navigator.clipboard
      .writeText(cardNumberCount)
      .then(function () {
        // Increment the counter
        counter++;
        counterCopy.innerText = counter;

        // alert copied to clipboard
        alert(`নম্বর কপি হয়েছে: ${cardNumberCount}`);
      })
      .catch((err) => {
        console.error("নম্বর কপি হয়নি: ", err);
      });
  });
}
