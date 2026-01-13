const input = document.querySelector("#input");
const adFruit = document.querySelector("#adfruit");

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Grapes",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Guava",
  "Lemon",
  "Lychee",
  "Coconut",
  "Pomegranate",
];

const div = document.querySelector("#fruitsItems");
const deletedList = document.querySelector("#deletedItemList");
let arrayDeleted = [];

function renderItems() {
  div.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    div.innerHTML += `
        
        <li>
            ${fruits[i]}       
    <div class = "btns"> 
    <button onclick="deleteItem(${i})" id="button">Delete Items</button>
        </li>
    </div>
        `;
  }
}
renderItems();
adFruit.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    fruits.push(input.value);
    renderItems();
    input.value = "";
  }
});
input.addEventListener("change", () => {
  if (input.value.trim() !== "") {
    fruits.push(input.value);
    renderItems();
    input.value = "";
  }
});

function deleteItem(index) {
  arrayDeleted.push(fruits[index]);
  fruits.splice(index, 1);
  renderItems();
  deletedList.innerHTML = "";
  for (let i = 0; i < arrayDeleted.length; i++) {
    deletedList.innerHTML += `  <p>Trash Items</p>
        <li>
        ${arrayDeleted[i]}
        </li>`;
  }
}

///

let myVar = "mathmatics, science, english, urdu, islamiet, computer";
let newVar = myVar.split(",");
// console.log(newVar);

// console.log(newVar.slice(0, 3, "updated"));

/////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Lowercase Name Write a function that takes a name as input and returns it all in lowercase.
const userIn = document.querySelector("#userInput");
const btn = document.querySelector("#userName");
const ul = document.querySelector("#ul");
const upperCase = document.querySelector("#upperCase");
btn.addEventListener("click", function () {
  let userN = userIn.value;
  if (userN.trim() === "") {
    alert("Please Type Something in the Input Field");
  } else {
    ul.innerHTML += `<li>${userN.toLowerCase()}</li>`;
    userIn.value = "";
  }
  // return userN.toLowerCase();
});
// console.log(userName(prompt("Enter Your Name")));

// 2. Uppercase Shouting Convert a given string into uppercase to simulate shouting. Example: "hello" →"HELLO".
upperCase.addEventListener("click", () => {
  let upCase = userIn.value;
  if (upCase.trim() === "") {
    alert("Please Type Something in the Input Field");
  } else {
    ul.innerHTML += `
  <li>
    ${upCase.toUpperCase()}
  </li>
  `;
    userIn.value = "";
  }
});
////////////////////////////////////////////////////////////





// 3. Count Characters Given a string, return the number of characters in it.
let str = prompt("Enter Any thing")


  console.log(str.trim().length);