const childrenInput = document.querySelector("#children-input");
const parentsInput = document.querySelector("#parents-input");
const parentsList = document.querySelector("#parents-list");
const resulstsList = document.querySelector("#results-list");

let parentsSizes =
  localStorage.getItem("parentSizes") === null
    ? []
    : JSON.parse(localStorage.getItem("parentSizes"));
let childrenSizes =
  localStorage.getItem("childrenSizes") === null
    ? []
    : JSON.parse(localStorage.getItem("childrenSizes"));

addButtons(parentsSizes);
addReturnSizes();

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
    addReturnSizes();
    localStorageParents();
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
    addReturnSizes();
    localStorageChildren();
  }
});

function addButtons(arr) {
  for (var i = 0; i < arr.length; i++) {
    const btn = document.createElement("button");
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
      addReturnSizes();
      localStorageParents();
    };
    parentsList.appendChild(btn);
  }
}

function addReturnSizes() {
  resulstsList.innerHTML = "";
  for (const childrenSize of childrenSizes) {
    const returnSizeDiv = document.createElement("div");
    returnSizeDiv.style.display = "inline";
    const childrenButton = document.createElement("button");
    const indexCurrentChildrenSize = childrenSizes.indexOf(childrenSize);
    childrenButton.innerHTML = childrenSize;
    childrenButton.onclick = function () {
      if (indexCurrentChildrenSize > -1) {
        childrenSizes.splice(indexCurrentChildrenSize, 1);
      } else {
        alert("children sizes array error");
      }
      resulstsList.innerHTML = "";
      addReturnSizes();
      localStorageChildren();
    };
    returnSizeDiv.appendChild(childrenButton);
    for (const parentSize of parentsSizes) {
      const equivalenceButton = document.createElement("button");
      const equivalence = ((childrenSize / parentSize) * 100).toFixed(2);
      equivalenceButton.innerHTML = `${parentSize}: ${equivalence}%`;
      equivalenceButton.onclick = function () {
        navigator.clipboard.writeText(`${equivalence}vw`);
      };
      returnSizeDiv.appendChild(equivalenceButton);
    }
    resulstsList.appendChild(returnSizeDiv);
  }
}

function sortNumbers(a, b) {
  return a - b;
}

function localStorageParents() {
  localStorage.setItem("parentSizes", JSON.stringify(parentsSizes));
}

function localStorageChildren() {
  localStorage.setItem("childrenSizes", JSON.stringify(childrenSizes));
}

// TODO: show returned values in a table, with different colors
