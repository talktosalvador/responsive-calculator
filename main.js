const childrenInput = document.querySelector("#children-input");
const parentsInput = document.querySelector("#parents-input");
const parentsList = document.querySelector("#parents-list");
const resulstsList = document.querySelector("#results-list");
let parentsSizes = [1440];
let resultsSizes = [];

parentsInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const parentValue = event.target.value;
    parentsList.innerHTML = "";
    parentsInput.value = "";
    parentsSizes.push(parentValue);
    parentsSizes.sort(sortNumbers);
    for (const size of parentsSizes) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(size));
      parentsList.appendChild(li);
    }
  }
});

childrenInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const childrenValue = event.target.value;
    resulstsList.innerHTML = "";
    childrenInput.value = "";
    resultsSizes.push(childrenValue);
    resultsSizes.sort(sortNumbers);
    for (const result of resultsSizes) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(`${result}px => `));
      for (const size of parentsSizes) {
        li.innerText += `${size}: ${((result / size) * 100).toFixed(2)}%, `;
      }
      resulstsList.appendChild(li);
    }
  }
});

function sortNumbers(a, b) {
  return a - b;
}

// TODO: reject invalid values and existing sizes => don't  show duplicated items
// TODO: display each entered size in a button, in hover show x-mark to erase it and update returned values
// TODO: show returned values in a table, with different colors
