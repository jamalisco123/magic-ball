document.getElementById("btn").addEventListener("click", inputt);

function inputt() {
  let input = document.getElementById("input").value;
  let randN = Math.floor(Math.random() * 5 + 1);
  console.log(randN);
  let outputEl = document.getElementById("output");
  if (input.toLowerCase() == "does a magic 8 ball actually work?") {
    outputEl.innerHTML = "How dare you doubt me!!";
  } else if (input.toLowerCase() == "") {
    outputEl.innerHTML = "please ask a question.";
  } else if (input.toLowerCase() == "is javaScript awesome?") {
    outputEl.innerHTML = "Of course!!";
  } else if (input.toLowerCase() == "how old are you ?") {
    outputEl.innerHTML = "i am ten years old";
  } else if (input.toLowerCase() == "are you happy") {
    outputEl.innerHTML = "yeah i am!!";
  } else if (input.toLowerCase() == "will divine compete in cities?") {
    outputEl.innerHTML = "he is too slow for that!!";
  } else if (randN <= 1) {
    outputEl.innerHTML = "Without a Doubt.";
  } else if (randN == 2) {
    outputEl.innerHTML = "Don't count on it.";
  } else if (randN == 3) {
    outputEl.innerHTML = "As I see it, yes";
  } else if (randN == 4) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (randN == 5) {
    outputEl.innerHTML = "Outlook not so good.";
  }
}
