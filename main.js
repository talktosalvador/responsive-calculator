const childrenInput = document.querySelector("#children-input");
const parentsInput = document.querySelector("#parents-input");
const parentsList = document.querySelector("#parents-list");
const resulstsList = document.querySelector("#results-list");
let parentsSizes = [1440];
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
    resulstsList.innerHTML = "";
    childrenInput.value = "";
    childrenSizes.push(childrenValue);
    childrenSizes.sort(sortNumbers);
    for (const result of childrenSizes) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(`${result}px => `));
      for (const size of parentsSizes) {
        li.innerText += `${size}: ${((result / size) * 100).toFixed(2)}%, `;
      }
      resulstsList.appendChild(li);
    }
  }
});

function addButtons(arr) {
  for (var i = 0; i < arr.length; i++) {
    const btn = document.createElement("BUTTON");
    const currentSize = arr[i];
    const indexCurrentSize = arr[i];
    btn.innerHTML = currentSize;
    // btn.id = `btn-${currentSize}`;
    // btn.name = `btn-${currentSize}`;
    // btn.class = 'btn-classs';
    // btn.type = "submit";
    btn.onclick = function () {
      console.log(`size: ${currentSize}`);

      // const array = [2, 5, 9];
      // console.log(array);
      // const index = array.indexOf(5);
      // if (index > -1) {
        //   // only splice array when item is found
        //   array.splice(index, 1); // 2nd parameter means remove one item only
        // }
        // // array = [2, 9]
        // console.log(array);
        
      };
    parentsList.appendChild(btn);
  }
}

function sortNumbers(a, b) {
  return a - b;
}

// TODO: display each entered size in a button, in hover show x-mark to erase it and update returned values
// TODO: show returned values in a table, with different colors
