let nScore = 0;
let pScore = 0;

function question1() {
  let question1 = document.getElementsByName("q1");
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      if (question1[i].value == "c") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question2() {
  let question2 = document.getElementsByName("q2");
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
      if (question2[i].value == "c") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question3() {
  let question3 = document.getElementsByName("q3");
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked) {
      if (question3[i].value == "a") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question4() {
  let question4 = document.getElementsByName("q4");
  for (let i = 0; i < question4.length; i++) {
    if (question4[i].checked) {
      if (question4[i].value == "b") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question5() {
  let question5 = document.getElementsByName("q5");
  for (let i = 0; i < question5.length; i++) {
    if (question5[i].checked) {
      if (question5[i].value == "d") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question6() {
  let question6 = document.getElementsByName("q6");
  for (let i = 0; i < question6.length; i++) {
    if (question6[i].checked) {
      if (question6[i].value == "c") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question7() {
  let question7 = document.getElementsByName("q7");
  for (let i = 0; i < question7.length; i++) {
    if (question7[i].checked) {
      if (question7[i].value == "b") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question8() {
  let question8 = document.getElementsByName("q8");
  for (let i = 0; i < question8.length; i++) {
    if (question8[i].checked) {
      if (question8[i].value == "c") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question9() {
  let question9 = document.getElementsByName("q9");
  for (let i = 0; i < question9.length; i++) {
    if (question9[i].checked) {
      if (question9[i].value == "d") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
    }
  }
}
function question10() {
  let question10 = document.getElementsByName("q10");
  for (let i = 0; i < question10.length; i++) {
    if (question10[i].checked) {
      if (question10[i].value == "a") {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore += 10;
        percentageScore(pScore);
      } else {
        nScore += 25;
        progressBarUpdate(nScore);
        pScore -= 0;
        percentageScore(pScore);
      }
      percentageScore(pScore);
    }
  }
}

function progressBarUpdate(value) {
  value = Math.round(value);
  let progressBar = (document.querySelector(
    ".progress-fill"
  ).style.width = `${value}`);
  return progressBar;
}

function percentageScore(value) {
  value = Math.round(value);
  let percentScore = (document.querySelector(
    ".progress-title"
  ).innerHTML = `${value}%`);
  percentScore.style.display = "block";
  return percentScore;
}
