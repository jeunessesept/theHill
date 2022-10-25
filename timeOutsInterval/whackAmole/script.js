///The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer.
///Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs.

const moles = document.querySelectorAll(".hole");
const holesContainer = document.querySelector(".holesContainer");

const displayMole = () => {
  let index = Math.floor(Math.random() * moles.length);
  let hole = moles[index];
  moles.forEach((mole) => {
    mole.style.background = "";
    mole.style.border = "2px solid green ";
  });
  hole.style.background = "red";
  

  const score = document.querySelector(".score");
  let scoreNumber = 1;

  moles.forEach((mole) => {
    mole.addEventListener("click", () => {
      if (mole.style.background === "red") {
        mole.style.background = "green";
        mole.style.border = "5px solid blue";
        score.textContent = "SCORE:" + scoreNumber;
        scoreNumber++;
      };
    });
  });
};

setInterval(displayMole, 1000);
