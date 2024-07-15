// Write your code here!

//create H1 element with variable newHeader
const newheader = document.createElement(h1);
//append the h1 to the body
document.body.append(newheader);
newheader.id = 'victory';

//remove element with id='main'

document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.remove();
    }
  });
  