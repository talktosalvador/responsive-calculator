const childrenInput = document.querySelector("#children-input");
const parentsInput = document.querySelector("#parents-input");
const parentsList = document.querySelector("#parents-list");
const resulstsList = document.querySelector("#results-list");
let parentsSizes = [];
let childrenSizes = [];

parentsInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const parentValue = event.target.value;
    if (parentsSizes.includes(parentValue) || parentValue <= 0) {
      alert(`Ooops!\nIt already exists or is invalid`);
      parentsInput.value = "";
      return;
    }
    parentsList.innerHTML = "";
    parentsInput.value = "";
    parentsSizes.push(parentValue);
    parentsSizes.sort(sortNumbers);
    addButtons(parentsSizes);
    addReturnSizes()
  }
});

childrenInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const childrenValue = event.target.value;
    if (childrenSizes.includes(childrenValue) || childrenValue <= 0) {
      alert(`Ooops!\nIt already exists or is invalid`);
      childrenInput.value = "";
      return;
    }
    childrenInput.value = "";
    childrenSizes.push(childrenValue);
    childrenSizes.sort(sortNumbers);
    addReturnSizes()
  }
});

function addButtons(arr) {
  for (var i = 0; i < arr.length; i++) {
    const btn = document.createElement("BUTTON");
    const currentSize = arr[i];
    const indexCurrentSize = arr.indexOf(currentSize);
    btn.innerHTML = currentSize;
    btn.onclick = function () {
      if (indexCurrentSize > -1) {
        arr.splice(indexCurrentSize, 1);
      } else {
        alert("parent sizes array error");
      }
      parentsList.innerHTML = "";
      addButtons(parentsSizes);
      addReturnSizes()
    };
    parentsList.appendChild(btn);
  }
}

function sortNumbers(a, b) {
  return a - b;
}

function addReturnSizes() {
  resulstsList.innerHTML = "";
  for (const result of childrenSizes) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${result}px => `));
    for (const size of parentsSizes) {
      li.innerText += `${size}: ${((result / size) * 100).toFixed(2)}%, `;
    }
    resulstsList.appendChild(li);
  }
}

// TODO: for each parent size button, hover display x-mark
// TODO: show returned values in a table, with different colors
