const letter = ["B", "I", "G", "N", "O", "G", "B", "N"];
const btn = document.querySelector("button");
const span = document.querySelector("span").style.color = "#FB8500";
 document.querySelector("h1").style.color = "#FB8500";

// b = new Array(2, 4, 6, 8, 10, 12),
// i = new Array(14, 16, 18, 20, 22),
// n = new Array(22, 24, 26, 28, 30),
// g = new Array(32, 34, 36, 38, 40),
// o = new Array(42, 44, 46, 48, 50);


function changeLetter() {

  let randomLetter = Math.floor(Math.random() * letter.length);
  
  document.querySelector("h1").innerText = letter[randomLetter];

  console.log(letter[randomLetter]);



  const randomNumb = Math.floor(Math.random() * 50) - 2;

    document.querySelector("span").innerText = [randomNumb];
    document.querySelector("span").style.fontSize = "3rem";
    console.log(randomNumb);

}
btn.addEventListener("click", changeLetter);
