console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black
let off = document.querySelector("#off");

let bulb = document.querySelectorAll(".lightbulb")


off.addEventListener("click", function(event){
  for (let i = 0; i < bulb.length;i++){
    bulb[i].style.backgroundColor = "black";
  }
  })




// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"
let cshMode = document.querySelector("#cshMode")

let body = document.querySelector("#body")

cshMode.addEventListener("mouseover", function(event){
  body.style.background = "green"
  bulb.textContent = "💻"
});

cshMode.addEventListener("mouseout", function(event){
  body.style.background = "black"
  bulb.textContent = "💡"
});

// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css






