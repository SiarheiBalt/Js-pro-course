let drums = document.querySelector(".drums");
let synth = document.querySelector(".sint");
let dramsBtn = document.querySelector(".dramsBtn");
let sintBtn = document.querySelector(".sintBtn");
let indicator = document.querySelector(".indicator");

dramsBtn.disabled = true;
const changeInstrument = (insrtrument) => {
  if (insrtrument === "DRUMS") {
    drums.classList.remove("hide");
    synth.classList.add("hide");
    dramsBtn.disabled = true;
    sintBtn.disabled = false;
  } else {
    synth.classList.remove("hide");
    drums.classList.add("hide");
    dramsBtn.disabled = false;
    sintBtn.disabled = true;
  }
};

const playSound = (e) => {
  if (e.target.innerHTML === "DRUMS" || e.target.innerHTML === "SYNTH")
    changeInstrument(e.target.innerHTML);
  let eventKey =
    e.type === "keydown"
      ? e.key.toUpperCase()
      : e.target.attributes[1] !== undefined &&
        e.target.attributes[1].nodeValue;

  const audio = document.querySelector(`audio[data-key="${eventKey}"]`);
  const key = document.querySelector(`.key[data-key="${eventKey}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  indicator.style.backgroundColor = "lightyellow";
  setTimeout(() => {
    key.classList.remove("playing");
    indicator.style.backgroundColor = "black";
  }, 120);
};
document.addEventListener("keydown", playSound);
document.addEventListener("mousedown", playSound);
