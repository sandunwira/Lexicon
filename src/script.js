// Get the form and input elements
let form = document.getElementById("search-form");
let input = document.getElementById("search-input");

// Add event listener to the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting

  // Get the user-submitted word and create the URL for the JSON file
  let word = input.value;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  // Use fetch to get the JSON data
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Get the container element
      let container = document.getElementById("data-container");
      let htmlData = "";
      // Loop through the data array
      for (let i = 0; i < data.length; i++) {
        htmlData += data[i].word;
      }
      // Insert the HTML into the container
      container.innerHTML = htmlData;
    });
});
