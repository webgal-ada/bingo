var btn = document.querySelector('button');


const myh3 = document.querySelector('h3')


function changeNum() {
const random = Math.floor(Math.random() * 50 ) + 1;

for(let i =0; i < 50; i++)
    myh3.textContent = random;
    myh3.style.color='red';
    myh3.style.fontSize='54px';
}



  // b = new Array(2, 4, 6, 8, 10, 12),
  // i = new Array(14, 16, 18, 20, 22),
  // n = new Array(22, 24, 26, 28, 30),
  // g = new Array(32, 34, 36, 38, 40),
  // o = new Array(42, 44, 46, 48, 50) 