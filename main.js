let nScore = 0;
function check() {
  let question1 = document.getElementsByName("q1");
  let question2 = document.getElementsByName("q2");
  let question3 = document.getElementsByName("q3");
  let question4 = document.getElementsByName("q4");
  let question5 = document.getElementsByName("q5");
  let question6 = document.getElementsByName("q6");
  let question7 = document.getElementsByName("q7");
  let question8 = document.getElementsByName("q8");
  let question9 = document.getElementsByName("q9");
  let question10 = document.getElementsByName("q10");

  //   console.log(question1);

  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      if (question1[i].value == "c") {
        //  question1[i].value;
        console.log("checked correct answer", question1[i].value);
        //   if (q1[i].value === "C") {
        nScore += 10;
        return progressBarUpdate(nScore);
      } else {
        console.log("not checked");
        return;
        // }
      }
    }
  }
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
      if (question2[i].value == "c") {
        //  question1[i].value;
        console.log("checked correct answer", question2[i].value);
        //   if (q1[i].value === "C") {
        nScore += 10;
        return progressBarUpdate(nScore);
      } else {
        console.log("not checked");
        return;
        // }
      }
    }
  }
  for (let i = 0; i < question3.length; i++) {
    if (question3[i].checked) {
      if (question3[i].value == "a") {
        console.log("checked correct answer", question3[i].value);

        nScore += 10;
        return progressBarUpdate(nScore);
      } else {
        console.log("not checked");
        return;
      }
    }
  }
}

check();
// function fQuestion1() {
//   let sCorrectAnswer = document.getElementById("q1c");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }

// function fQuestion2() {
//   let sCorrectAnswer = document.getElementById("q2c");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }

// function fQuestion3() {
//   let sCorrectAnswer = document.getElementById("q3a");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
//   document.getElementById("txtScore").value = nScore;
// }

// function fQuestion4() {
//   let sCorrectAnswer = document.getElementById("q4b");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion5() {
//   let sCorrectAnswer = document.getElementById("q5d");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion6() {
//   let sCorrectAnswer = document.getElementById("q6a");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion7() {
//   let sCorrectAnswer = document.getElementById("q7b");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion8() {
//   let sCorrectAnswer = document.getElementById("q8c");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion9() {
//   let sCorrectAnswer = document.getElementById("q9d");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }
// function fQuestion10() {
//   let sCorrectAnswer = document.getElementById("q10a");

//   if (sCorrectAnswer.checked === true) {
//     nScore += 10;
//     progressBarUpdate(nScore);
//     total += 1;
//     console.log(total);
//   } else {
//     nScore -= 0;
//   }
// }

function progressBarUpdate(value) {
  value = Math.round(value);
  let progressBar = (document.querySelector(
    ".progress-fill"
  ).style.width = `${value}`);
  return progressBar;
}
