const domEntry = document.getElementById('app');

let myDiv = document.createElement('h1');
myDiv.textContent = "TS / JS working";
myDiv.style.color = "red";

domEntry?.appendChild(myDiv) || console.log('no element found');
