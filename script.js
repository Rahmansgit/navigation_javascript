// // const myArray = ['mango', 'apple', 'pineapple'];
// // let myArray1 = myArray.at(0);
// // const onClick = () => {
// //   document.getElementById("js").innerHTML = myArray.sort("mango");
// // }
const myName = prompt("Enter your Name");

const myFunction = () => {
  const element = document.getElementById("js");
  if (element) {
    element.textContent = "Hello!"+" "+ myName; // Correct usage of textContent
  }
};

// Add an event listener to the button to call myFunction
document.getElementById("myButton")?.addEventListener("click", myFunction);


const navigateToPage = () => {
  window.location.href = "https://google.com"; // Replace with your target URL
};

document.getElementById("navigateButton").addEventListener("click", navigateToPage);

const navigateToPage1 = () => {
  window.location.href = "https://gmail.com"; // Replace with your target URL
};

document.getElementById("navigateButton1").addEventListener("click", navigateToPage1);