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
const childul = document.querySelector("#child-ul");
const countRestul = document.querySelector("#countResult");

countRestul.addEventListener("click", () => {
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
  `;
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
const inpuChar = document.querySelector("#inputChar");
const body = document.querySelector("body");
// let st = prompt("enter Character:").trim()
let newCh;
// console.log(st.charAt(0));
inpuChar.addEventListener("change", () => {
  let ch = inpuChar.value;
  newCh = ch.trim().charAt(0);
  body.innerHTML += `<h3> 
  first Character of the input is => ${newCh}
  </h3>`;
// <<<<<<< Updated upstream
  console.log(newCh);
});
//////////////////////Done:

/*
5. Last Character
Return the last character of any string using .charAt() and .length.
*/

inpuChar.addEventListener("change", () => {
  let lastCh = inpuChar.value;
  // lastCh.trim()
  let newLastCh = lastCh.trim();
  body.innerHTML += `
  <h2>The last character Of the input is: => ${newLastCh.charAt(
    newLastCh.length - 1
  )}
  </h2>
  `;
});

////////////////////Done

/*
6. Find Position of Word
Given a sentence, find the position (index) of the word "apple" using indexOf.
*/
const bt = document.querySelector("#bt");
bt.addEventListener("click", () => {
  let sentence = prompt("Enter your Sentence").toLowerCase();

  let pos = sentence.indexOf("apple");
  console.log(pos);
});
/////////////////////////Done

/*
7. Extract First Word
Use slice() and indexOf() to extract the first word from a sentence.
*/
const bt7 = document.querySelector("#bt7");
bt7.addEventListener("click", () => {
  let sent = prompt("ENTER yoUR SENT");
  let firstWord = sent.slice(0, sent.indexOf(" "));
  console.log(firstWord);
});

//////////////////////Done

/*
8. Replace a Word
Replace the word "bad" with "good" in a given sentence using replace().
*/
const bt8 = document.querySelector("#bt8");
bt8.addEventListener("click", () => {
  let givenSentence = prompt("Enter your Sentence");
  let givenResult = givenSentence.toLowerCase().replace("bad", "good");
  console.log(`Result of Question No 8: => ${givenResult}`);
});

/*
9. Replace All Vowels
Replace all occurrences of vowels in a string with "*" using replaceAll().
*/
const bt9 = document.querySelector("#bt9");

bt9.addEventListener("click", () => {
  const vowels = prompt("Enter your sentence");
  let changeVowel = vowels.replaceAll(/[aeiou]/gi, "*");
  console.log(changeVowel);
});
///////////////////////Done

/*
10. Split Sentence into Words
Convert a sentence into an array of words using split(" ").
*/
const bt10 = document.querySelector("#bt10");
bt10.addEventListener("click", () => {
  let split = prompt("Enter a sentence to split");
  let newSplit = split.split(" ");
  console.log(newSplit);
});
///////////////////////Done

/*
11. Capitalize First Letter
Capitalize only the first letter of a given word.
*/
const bt11 = document.querySelector("#bt11");
bt11.addEventListener("click", () => {
  let wrd = prompt("Enter Your name");
  let changeWrd = wrd.charAt(0).toUpperCase();
  let restWrd = wrd.slice(1);
  let concat = changeWrd + restWrd;
  console.log(concat);
});

/*12. Find Second Word
Write a function that returns the second word of a sentence using split().
*/

// function cll() {
//   let wordSentence = prompt("Enter Your Sentence");
//   let newSent = wordSentence.split(" ");
//   let resultSent = `Your second Word is => ${newSent[1]}`;
//   return resultSent;
// }

// console.log(cll());
// >>>>>>> Stashed changes


// 12: find Second word:  write a funciton to find a second word in a sentence using split()
const bt12 = document.querySelector("#bt12");
bt12.addEventListener("click", () => {
  function CallToSplit() {
    let sentence = prompt("Enter Your Sentence");
    let sentenceSp = sentence.trim();
    let newSentence = sentenceSp.split(" ");
    if (newSentence[1] === undefined)
      return "Sorry We could Not Find Your Second Word.";
    return `your second word is ${newSentence[1]} `;
    // console.log(sentenceSp[1]);
  }
  console.log(CallToSplit());
});
////////////////////Done:

//13: censor a word: Replace ALl instances of a bad word like "dumb" in a string with "******"
let censorSenctence = "hello your are dumb as fuck";
let multipleSencors = censorSenctence.replace("dumb", "*****");
console.log(multipleSencors);
///////////////////Done

//14: count word in sentence: use .split() and .length to count how many words are in a sentence.
const bt14 = document.querySelector("#bt14");
bt14.addEventListener("click", () => {
  let words = prompt(
    "Enter your senctence to count how many words are their in your sentence "
  ).trim();
  let wordCount = words.split(" ");

  if (wordCount.length > 1) {
    console.log(`You have ${wordCount.length} words in your sentences`);
  } else {
    console.log(`You have ${wordCount.length} word in your sentences`);
  }
});
///////////////////Done

//15: return true if Word exist: return true if a specific word (e.g., "cat") exists in a string using indexof.



