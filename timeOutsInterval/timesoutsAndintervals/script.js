///Write a function that mimics the behaviour of a typewriter.
///Using setInterval display the word prout one character at a time (one letter per second).
///Once the word is written on the screen clear the interval.
const ex1 = document.getElementById("exercice1");

const txt = "prout";
const speed = 1000;
let seconds = 0;

const typeWriter = () => {
  let i = 0;
  ex1.textContent = "";

  let interval = setInterval(function () {
    ex1.textContent += txt[i];
    i++;

    if (i === txt.length) {
      clearInterval(interval);
    }
  }, speed);
};

typeWriter();

///Write a function that displays every second that has passed on the page since it was opened.
///The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed",
///then "2 minutes have passed" (for 120 seconds and more), etc.

const _initTime = Date.now();

const getElapsedTime = () => {
  let ex2 = document.getElementById("exercie2");
  seconds = Number(Math.floor((Date.now() - _initTime) / 1000)).toFixed(2);
  
  console.log(seconds)
  console.log(parseInt(seconds))
    if (parseInt(seconds) >= 60) {
      ex2.textContent= "minutes =" +  Math.floor(parseInt(seconds)/60)
    } else {
      ex2.textContent = parseInt(seconds);
    }
};

setInterval(getElapsedTime, 1000);
