let typed = "";
const element = document.querySelector(".feedback-title");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 80);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 3000);
  }
}

function getRandomPun() {
  const puns = [
    "Be Honest - What do you think about Horse-Hoof."
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);
