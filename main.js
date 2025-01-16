//select all the div and store them in a variable called buttons
const buttons = document.querySelectorAll('div');
//select all the h1 and store them in a variable called h1s
const h1s = document.querySelectorAll('h1');

//Random color generator
const colorGenerator = () =>{
  const r = Math.floor(Math.random() * 255);
const g  = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`
};

//loop over the divs to apply addEventListener
for (let button of buttons) {
button.addEventListener('click', newColors);
};

// loop over the h1s to apply addEventListener
for (let h1 of h1s) {
  h1.addEventListener('click', newColors)

};

// This function pass the color generator to as a value to the various evens
function newColors() {
  this.style.backgroundColor = colorGenerator();
  this.style.backgroundColor = colorGenerator();
  this.style.color = colorGenerator();
}
