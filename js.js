const el = document.querySelector(".typing");
const words = ["Frontend Developer"];
let w = 0;
let i = 0;
let deleting = false;

function type() {
  const word = words[w];
  el.textContent = word.substring(0, i);

  if (!deleting && i < word.length) {
    i++;
    setTimeout(type, 120);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1500);
  } else if (i > 0) {
    i--;
    setTimeout(type, 60);
  } else {
    deleting = false;
    w = (w + 1) % words.length;
    setTimeout(type, 400);
  }
}
