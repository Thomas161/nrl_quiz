let nScore = 0;
let total = 10;

function fQuestion1() {
  let sCorrectAnswer = document.getElementById("q1c");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}

function fQuestion2() {
  let sCorrectAnswer = document.getElementById("q2c");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}

function fQuestion3() {
  let sCorrectAnswer = document.getElementById("q3a");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
  document.getElementById("txtScore").value = nScore;
}

function fQuestion4() {
  let sCorrectAnswer = document.getElementById("q4b");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion5() {
  let sCorrectAnswer = document.getElementById("q5d");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion6() {
  let sCorrectAnswer = document.getElementById("q6a");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion7() {
  let sCorrectAnswer = document.getElementById("q7b");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion8() {
  let sCorrectAnswer = document.getElementById("q8c");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion9() {
  let sCorrectAnswer = document.getElementById("q9d");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}
function fQuestion10() {
  let sCorrectAnswer = document.getElementById("q10a");

  if (sCorrectAnswer.checked === true) {
    nScore += 10;
    progressBarUpdate(nScore);
  } else {
    nScore -= 0;
  }
}

function progressBarUpdate(value) {
  value = Math.round(value);
  let progressBar = (document.querySelector(
    ".progress-fill"
  ).style.width = `${value}`);
  return progressBar;
}
