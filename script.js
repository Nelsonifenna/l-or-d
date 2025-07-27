const deathBtn = document.getElementById("deathBtn");
const bornBtn = document.getElementById("bornBtn");
const liveBtn = document.getElementById("liveBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

liveBtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
deathBtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};
bornBtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};
