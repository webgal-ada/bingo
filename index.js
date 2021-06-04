
const btn = document.querySelector('button');
    
        // b = new Array(2, 4, 6, 8, 10, 12),
        // i = new Array(14, 16, 18, 20, 22),
        // n = new Array(22, 24, 26, 28, 30),
        // g = new Array(32, 34, 36, 38, 40),
        // o = new Array(42, 44, 46, 48, 50);

const myh3 = document.querySelector("h3");


for(let i = 0; i <= 50;i += 2) {
  myh3.style.color = "red";
  myh3.style.fontSize = "54px";
  myh3.textContent = i;
  
  console.log(i);
}
