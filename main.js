const userInput = document.querySelector("#userInput");
const sizeInput = document.querySelector("#sizeInput");
const resulstsList = document.querySelector("#resultsList");
const sizesList = document.querySelector("#sizesList");
let results = [];
let sizes = [1440];

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    resulstsList.innerHTML = "";
    const value = event.target.value;
    userInput.value = "";
    results.push(value);
    results.sort(sortNumbers);
    for (const result of results) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(`${result}px => `));
      for (const size of sizes) {
        li.innerText += `${size}: ${((result / size) * 100).toFixed(2)}%, `;
      }
      resulstsList.appendChild(li);
    }
  }
});

sizeInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sizesList.innerHTML = "";
    const value = event.target.value;
    sizeInput.value = "";
    sizes.push(value);
    sizes.sort(sortNumbers);
    for (const size of sizes) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(size));
      sizesList.appendChild(li);
    }
  }
});

function sortNumbers(a, b) {
  return a - b;
}

// TODO: reject invalid values and existing sizes => don't  show duplicated items
// TODO: display each entered size in a button, in hover show x-mark to erase it and update returned values
// TODO: show returned values in a table, with different colors
