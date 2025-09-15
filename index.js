
const copyCountEl = document.getElementById("copyCount");
const heartCountEl = document.getElementById("heartCount");
const callHistory = document.getElementById("callHistory");
const clearHistory = document.getElementById("clearHistory");
const callCoinEl = document.getElementById("callCoin"); 

let copyCount = parseInt(copyCountEl?.textContent) || 0;
let heartCount = parseInt(heartCountEl?.textContent) || 0;
let callCoin = parseInt(callCoinEl?.textContent) || 100; 

document.body.addEventListener("click", (e) => {
  const target = e.target;

 // copy
  if (target.closest(".copy-click")) {
    copyCountEl.textContent = ++copyCount;

    const card = target.closest(".card-child");
    const contactNumber = card.querySelector(".contact-number").textContent.trim();

    navigator.clipboard.writeText(contactNumber).then(() => {
      alert("Number Copied")
    }).catch(err => console.error("Failed to copy:", err));
  }

  if (target.closest(".heart-count")) {
    heartCountEl.textContent = ++heartCount;
  }

  if (target.closest(".call-click")) {
    if (callCoin < 20) {
      alert("Not enough coin");
      return; 
    }

    // cut coin
    callCoin -= 20;
    callCoinEl.textContent = callCoin;

    const card = target.closest(".card-child");
    const title = card.querySelector("h2").textContent.trim();
    const number = card.querySelector(".contact-number").textContent.trim();

    const now = new Date().toLocaleTimeString();

    const entry = document.createElement("div");
    entry.className = "rounded-lg p-2 mb-2 shadow-sm bg-gray-200";
    entry.innerHTML = `
      <div class="flex justify-between items-center p-1">
        <div>
          <div class="font-bold">${title}</div>
          <div class="text-gray-400">${number}</div>
        </div>
        <div class="text-xs text-black">${now}</div>
      </div>
    `;

    callHistory.prepend(entry);
  }
});


clearHistory?.addEventListener("click", () => {
  callHistory.innerHTML = "";
});