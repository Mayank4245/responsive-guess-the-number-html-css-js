let number = Math.floor(Math.random() * 101);
let chance = 0;

function guessTheNumber() {
  let input = parseInt(document.getElementById("input2").value);
  if (isNaN(input)){
    document.getElementById("output_comment").textContent = "You enter Nothing pls try again with entering a valid number";
  }else if (input === number) {
    document.getElementById("output_comment").textContent = "Pls refresh the page for play this game again";
    alert("Congratulations! You entered the right number.");
    document.querySelector(".output").style.backgroundColor = "rgb(51, 247, 51)";
  } else if (input < number) {
    document.getElementById("output_comment").textContent = `Oh no! You entered ${input}, which is too low. Try again with a greater number.`;
  } else {
    document.getElementById("output_comment").textContent = `Oh no! You entered ${input}, which is too high. Try again with a smaller number.`;
  }

  chance++;
  document.getElementById("chance").textContent = `No. of Guesses: ${chance}`;
}