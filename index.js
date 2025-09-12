const copyButtons = document.querySelectorAll(".copy-click");
const copyCount = document.getElementById("copyCount");
let count = parseInt(copyCount.textContent);

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    copyCount.textContent = count;
    //alert("Number of copies: " + count);
  });
});
// heart count;
const heartButtons = document.querySelectorAll(".heart-count");
const heartCount = document.getElementById("heartCount");
let hcount = parseInt(heartCount.textContent);

heartButtons.forEach(button => {
  button.addEventListener("click", () => {
    hcount++;
    heartCount.textContent = hcount;
  });
});