document.addEventListener("DOMContentLoaded", function() {
    // Remove the element with id 'main'
    var mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.remove();
    }
    
    // Create an H1 element with variable newHeader
    const newHeader = document.createElement("h1");
    
    // Set the id of the newHeader
    newHeader.id = 'victory';
    
    // Set the innerHTML of the newHeader
    newHeader.innerHTML = "James Kahwai is the champion";
    
    // Append the h1 to the body
    document.body.append(newHeader);
  });
  