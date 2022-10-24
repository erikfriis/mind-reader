"use strict";

// info

let questions = [
  "is the person you think of a male?",
  "does the person have blonde hair?",
  "is the person younger than 50 years old?",
  "is the person associated with sports?",
  "is the person associated with music?",
  "is the person associated with politics?",
  "is the person associated with the movie indusrty?",
  "is the preson famous for his big nose?",
  "does the person you think of like to sing about umbrellas?",
  "does the person you think of look kind of like a grown baby?",
  "is the person you think of famous for his deep voice?",
];
let answersOne = [
  "male",
  "blonde",
  "younger",
  "sports",
  "music",
  "politics",
  "actor",
  "nose",
  "umbrella",
  "grown baby",
  "deep voice",
];
let answersTwo = [
  "female",
  "dark",
  "older",
  "sports",
  "music",
  "politics",
  "actor",
  "jamaica",
  "toxic",
  "democrat",
  "hunger games",
];

let people = [
  {
    gender: "male",
    haircolor: "dark",
    age: "younger",
    category: "sports",
    specific: "nose",
    name: "Zlatan Ibrahimović",
  },

  {
    gender: "female",
    haircolor: "blonde",
    age: "younger",
    category: "music",
    specific: "toxic",
    name: "Brittney Spears",
  },

  {
    gender: "male",
    haricolor: "blonde",
    age: "older",
    category: "actor",
    specific: "deep voice",
    name: "Morgan Freeman",
  },
  {
    gender: "male",
    haircolor: "blonde",
    age: "older",
    category: "politics",
    specific: "grown baby",
    name: "Donald Trump",
  },
  {
    gender: "male",
    haircolor: "dark",
    age: "older",
    category: "politics",
    specific: "democrat",
    name: "Barack Obama",
  },
  {
    gender: "male",
    haircolor: "dark",
    age: "younger",
    category: "sports",
    specific: "jamaica",
    name: "Usain Bolt",
  },
  {
    gender: "female",
    haircolor: "dark",
    age: "younger",
    category: "music",
    specific: "umbrella",
    name: "Rihanna",
  },
  {
    gender: "female",
    haircolor: "blonde",
    age: "younger",
    category: "actor",
    specific: "hunger games",
    name: "Jennifer Lawrence",
  },
];
/* people.forEach((element, id) => {
  console.log(element.name);
  console.log(id);
}); */

const valuesArr = [];
const values = () => {
  for (let i = 0; i < people.length; i++) {
    valuesArr.push(Object.values(people[i]));
  }
  return valuesArr;
};
values();

// game set up

const theChosenOne = [];

//questions 1-6

function input() {
  for (let i = 0; i < 3; i++) {
    let input = prompt(questions[i]);
    if (input === "yes") {
      theChosenOne.push(answersOne[i]);
    } else if (input === "no") {
      theChosenOne.push(answersTwo[i]);
    } else {
      alert("only yes or no");
      i -= 1;
    }
  }
  for (let i = 3; i < 7; i++) {
    let input = prompt(questions[i]);
    if (input === "yes") {
      theChosenOne.push(answersOne[i]);
      break;
    } else if (input === "no") {
      continue;
    } else {
      alert("only yes or no");
      i -= 1;
    }
  }

  return theChosenOne;
}

// final questions

function specific() {
  if (theChosenOne.includes("sports")) {
    let input = prompt(questions[7]);
    if (input === "yes") {
      theChosenOne.push(answersOne[7]);
    } else {
      theChosenOne.push(answersTwo[7]);
    }
  } else if (theChosenOne.includes("music")) {
    let input = prompt(questions[8]);
    if (input === "yes") {
      theChosenOne.push(answersOne[8]);
    } else {
      theChosenOne.push(answersTwo[8]);
    }
  } else if (theChosenOne.includes("politics")) {
    let input = prompt(questions[9]);
    if (input === "yes") {
      theChosenOne.push(answersOne[9]);
    } else {
      theChosenOne.push(answersTwo[9]);
    }
  } else if (theChosenOne.includes("actor")) {
    let input = prompt(questions[10]);
    if (input === "yes") {
      theChosenOne.push(answersOne[10]);
    } else {
      theChosenOne.push(answersTwo[10]);
    }
  }
  return theChosenOne;
}

//compare inputed array to people arrays

function compareArrays() {
  for (let i = 0; i < valuesArr.length; i++) {
    let found = theChosenOne.every((elem) => valuesArr[i].includes(elem));
    if (found) {
      alert(`you are thinking of: ${valuesArr[i][5]}`);
      break;
    } else if (i === valuesArr.length - 1 && found === false) {
      confirm("No matches.. Are you sure you put the right info? Try again! ");
      input();
    }
  }
}

//run game..

function runGame() {
  input();
  specific();
  compareArrays();
}

const button = document.querySelector(".button");

button.addEventListener("click", runGame);
