document.body.addEventListener("keypress", (e) => {
  playSound(e.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let composition = document.querySelector("#input").value;
  if (composition != "") {
    let compositionArray = composition.split("");
    playComposer(compositionArray);
  }
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
};

const playComposer = (compositionArray) => {
  let wait = 0;
  for (let song of compositionArray) {
    setTimeout(() => {
      playSound(`key${song}`);
    }, wait);
    wait += 250;
  }
};
