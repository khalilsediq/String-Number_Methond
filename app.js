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

const childul = document.querySelector("#child-ul")
const countRestul = document.querySelector("#countResult")

countRestul.addEventListener('click', () => {
  let str = userIn.value;
  if (str.trim() === "") {
    alert("Please Input any word");
  } else {
    console.log(str.trim().length);
    childul.innerHTML = `
    <ul> 
  <li>
  The Character of this string is => ${str.trim().length}
  </li>
    </ul>
  `
  }
  userIn.value = "";
});
///////////////////Completed.


// 4. First Character: Write a function that returns the first character of a string using charAt().
// const inputChar = document.querySelector("#inputChar")

// inputChar.addEventListener("change", ()=>{
//   let char = inputChar.value;

//   console.log(char.trim());

// })
const inpuChar = document.querySelector("#inputChar")
const body = document.querySelector("body")
// let st = prompt("enter Character:").trim()
let newCh;
// console.log(st.charAt(0));
inpuChar.addEventListener("change", () => {
  let ch = inpuChar.value;
  newCh = ch.trim().charAt(0)
  body.innerHTML += `<h3> 
  first Character of the input is => ${newCh}
  </h3>`
  console.log(newCh);
})


//////////////////////Done:




// find Second word:  write a funciton to find a second word in a sentence using split()
const bt12 = document.querySelector("#bt12")
bt12.addEventListener("click", () => {

  function CallToSplit() {
    let sentence = prompt("Enter Your Sentence")
    let sentenceSp = sentence.trim()
    let newSentence = sentenceSp.split(" ")
    if (newSentence[1] === undefined) return "Sorry We could Not Find Your Second Word."
    return `your second word is ${newSentence[1]} `
    // console.log(sentenceSp[1]);
  }
  console.log(CallToSplit());
})


//13: censor a word: Replace ALl instances of a bad word like "dumb" in a string with "******"

let censorSenctence = "hello your are dumb"
if (censorSenctence.toLowerCase() === "dumb" || censorSenctence.toLowerCase() === "shit" || censorSenctence.toLowerCase() === "fuck") {
  console.log(censorSenctence.replace("***"));


} else {
  console.log(censorSenctence);

}
